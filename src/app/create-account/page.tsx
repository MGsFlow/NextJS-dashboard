'use client';

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
  InputAdornment,
  IconButton,
  Tooltip,
  Divider,
  Card,
  alpha,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Person,
  Badge,
  Key,
  AdminPanelSettings,
} from '@mui/icons-material';

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setSnackbar({
        open: true,
        message: '비밀번호가 일치하지 않습니다.',
        severity: 'error',
      });
      return;
    }

    setLoading(true);
    try {
      // API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSnackbar({
        open: true,
        message: '계정이 성공적으로 생성되었습니다.',
        severity: 'success',
      });
      setFormData({
        employeeId: '',
        name: '',
        password: '',
        confirmPassword: '',
        isAdmin: false,
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: '계정 생성 중 오류가 발생했습니다.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        새 계정 생성
      </Typography>

      <Card
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          maxWidth: 600,
          mx: 'auto',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 1, color: '#1e1e1e' }}>
            기본 정보
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <TextField
            fullWidth
            label="사원번호"
            value={formData.employeeId}
            onChange={(e) =>
              setFormData({ ...formData, employeeId: e.target.value })
            }
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                bgcolor: alpha('#f3f3f3', 0.5),
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Badge sx={{ color: '#969696' }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="이름"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                bgcolor: alpha('#f3f3f3', 0.5),
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: '#969696' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 1, color: '#1e1e1e' }}>
            보안 설정
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="비밀번호"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                bgcolor: alpha('#f3f3f3', 0.5),
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key sx={{ color: '#969696' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            label="비밀번호 확인"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                bgcolor: alpha('#f3f3f3', 0.5),
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key sx={{ color: '#969696' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 1, color: '#1e1e1e' }}>
            권한 설정
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Tooltip title="관리자 권한을 부여하면 모든 기능에 접근할 수 있습니다.">
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isAdmin}
                  onChange={(e) =>
                    setFormData({ ...formData, isAdmin: e.target.checked })
                  }
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#00aceb',
                      '& + .MuiSwitch-track': {
                        backgroundColor: '#00aceb',
                      },
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AdminPanelSettings sx={{ color: '#969696' }} />
                  <Typography>관리자 권한 부여</Typography>
                </Box>
              }
            />
          </Tooltip>
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={loading}
          sx={{
            py: 1.5,
            bgcolor: '#00aceb',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,172,235,0.24)',
            '&:hover': {
              bgcolor: alpha('#00aceb', 0.9),
              boxShadow: '0 6px 16px rgba(0,172,235,0.32)',
            },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: '#fff' }} />
          ) : (
            '계정 생성'
          )}
        </Button>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            borderRadius: '12px',
            bgcolor: snackbar.severity === 'success' ? '#00aceb' : undefined,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
} 