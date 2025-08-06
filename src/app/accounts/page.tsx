'use client';

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Checkbox,
  IconButton,
  Tooltip,
  useTheme,
  InputAdornment,
  Chip,
  Button,
  Card,
  alpha,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  CheckCircle,
  Cancel,
  Add,
  AdminPanelSettings,
} from '@mui/icons-material';

interface Account {
  id: number;
  employeeId: string;
  name: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: string;
}

const mockData: Account[] = [
  {
    id: 1,
    employeeId: 'EMP001',
    name: '김철수',
    isAdmin: true,
    isActive: true,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    employeeId: 'EMP002',
    name: '이영희',
    isAdmin: false,
    isActive: true,
    createdAt: '2024-01-16',
  },
  {
    id: 3,
    employeeId: 'EMP003',
    name: '박지민',
    isAdmin: false,
    isActive: false,
    createdAt: '2024-01-17',
  },
  {
    id: 4,
    employeeId: 'EMP004',
    name: '최수진',
    isAdmin: true,
    isActive: true,
    createdAt: '2024-01-18',
  },
];

const StatusChip = ({ isActive }: { isActive: boolean }) => {
  const theme = useTheme();
  return (
    <Chip
      icon={isActive ? <CheckCircle /> : <Cancel />}
      label={isActive ? '활성' : '비활성'}
      size="small"
      color={isActive ? 'success' : 'error'}
      sx={{
        '& .MuiChip-icon': {
          fontSize: 16,
        },
      }}
    />
  );
};

export default function Accounts() {
  const theme = useTheme();
  const [searchEmployeeId, setSearchEmployeeId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const columns: GridColDef[] = [
    {
      field: 'employeeId',
      headerName: '사원번호',
      flex: 1,
      minWidth: 120,
    },
    {
      field: 'name',
      headerName: '이름',
      flex: 1,
      minWidth: 120,
    },
    {
      field: 'isAdmin',
      headerName: '관리자',
      flex: 1,
      minWidth: 100,
      renderCell: (params: GridRenderCellParams) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {params.value && (
            <AdminPanelSettings sx={{ color: '#00aceb' }} fontSize="small" />
          )}
          <Typography
            variant="body2"
            sx={{ color: params.value ? '#00aceb' : '#969696' }}
          >
            {params.value ? '관리자' : '일반'}
          </Typography>
        </Box>
      ),
    },
    {
      field: 'isActive',
      headerName: '상태',
      flex: 1,
      minWidth: 100,
      renderCell: (params: GridRenderCellParams) => <StatusChip isActive={params.value} />,
    },
    {
      field: 'createdAt',
      headerName: '생성일',
      flex: 1,
      minWidth: 120,
    },
    {
      field: 'actions',
      headerName: '관리',
      flex: 1,
      minWidth: 120,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          <Tooltip title="수정">
            <IconButton
              size="small"
              sx={{
                color: '#00aceb',
                '&:hover': {
                  backgroundColor: alpha('#00aceb', 0.1),
                },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="삭제">
            <IconButton
              size="small"
              sx={{
                color: '#ff8630',
                '&:hover': {
                  backgroundColor: alpha('#ff8630', 0.1),
                },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const filteredData = mockData.filter((account) => {
    const matchesEmployeeId = account.employeeId
      .toLowerCase()
      .includes(searchEmployeeId.toLowerCase());
    const matchesName = account.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && account.isActive) ||
      (statusFilter === 'inactive' && !account.isActive);

    return matchesEmployeeId && matchesName && matchesStatus;
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          계정 관리
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            bgcolor: '#00aceb',
            borderRadius: '12px',
            px: 3,
            '&:hover': {
              bgcolor: alpha('#00aceb', 0.9),
              boxShadow: '0 8px 16px rgba(0,172,235,0.24)',
            },
          }}
        >
          새 계정
        </Button>
      </Box>

      <Card
        sx={{
          p: 3,
          mb: 3,
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              placeholder="사원번호 검색"
              value={searchEmployeeId}
              onChange={(e) => setSearchEmployeeId(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  bgcolor: alpha('#f3f3f3', 0.5),
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              placeholder="이름 검색"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  bgcolor: alpha('#f3f3f3', 0.5),
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl
              fullWidth
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  bgcolor: alpha('#f3f3f3', 0.5),
                },
              }}
            >
              <InputLabel>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FilterListIcon fontSize="small" />
                  상태
                </Box>
              </InputLabel>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                displayEmpty
              >
                <MenuItem value="all">전체 상태</MenuItem>
                <MenuItem value="active">활성</MenuItem>
                <MenuItem value="inactive">비활성</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>

      <Card
        sx={{
          height: 'calc(100vh - 300px)',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderColor: '#f3f3f3',
          },
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: alpha('#f3f3f3', 0.5),
            borderRadius: '12px 12px 0 0',
          },
          '& .MuiDataGrid-columnHeader': {
            '&:focus, &:focus-within': {
              outline: 'none',
            },
          },
        }}
      >
        <DataGrid
          rows={filteredData}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            '& .MuiCheckbox-root': {
              color: '#969696',
              '&.Mui-checked': {
                color: '#00aceb',
              },
            },
          }}
        />
      </Card>
    </Box>
  );
} 