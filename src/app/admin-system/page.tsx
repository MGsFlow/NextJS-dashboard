'use client';

import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  useTheme,
  IconButton,
  Avatar,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import {
  SupervisorAccount,
  PersonOutline,
  CheckCircleOutline,
  MoreVert,
  TrendingUp,
} from '@mui/icons-material';

// Data type definitions
interface AccountData {
  name: string;
  value: number;
}

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
  color: string;
}

interface CustomPieChartProps {
  data: AccountData[];
  colors: string[];
}

const data: AccountData[] = [
  { name: '일반 계정', value: 1178 },
  { name: '관리자 계정', value: 56 },
];

const COLORS: string[] = ['#2196F3', '#4CAF50'];

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  description, 
  progress, 
  icon, 
  color 
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          backgroundColor: color,
          borderRadius: '4px 4px 0 0',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Avatar
            sx={{
              backgroundColor: `${color}15`,
              width: 48,
              height: 48,
              color: color,
              boxShadow: `0 4px 12px ${color}40`,
            }}
          >
            {icon}
          </Avatar>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Box>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <TrendingUp sx={{ color: color, fontSize: 16, mr: 0.5 }} />
              <Typography variant="body2" sx={{ color: color, fontWeight: 'bold' }}>
                {progress}%
              </Typography>
            </Box>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: theme.palette.grey[200],
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
                backgroundColor: color,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const CustomPieChart: React.FC<CustomPieChartProps> = ({ data, colors }) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              stroke={theme.palette.background.paper}
              strokeWidth={4}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            borderRadius: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          content={({ payload }) => {
            if (!payload) return null;
            return (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 4,
                  mt: 2,
                }}
              >
                {payload.map((entry, index) => (
                  <Box
                    key={`legend-${index}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: entry.color,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {entry.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {data[index].value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            );
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const AdminSystem: React.FC = () => {
  const theme = useTheme();

  const stats: StatCardProps[] = [
    {
      title: '총 계정 수',
      value: '1,234',
      description: '전체 등록된 계정',
      progress: 100,
      icon: <PersonOutline />,
      color: theme.palette.primary.main,
    },
    {
      title: '관리자 계정 수',
      value: '56',
      description: '전체 계정 중 관리자 비율',
      progress: 4.5,
      icon: <SupervisorAccount />,
      color: theme.palette.secondary.main,
    },
    {
      title: '활성 계정 수',
      value: '987',
      description: '전체 계정 중 활성 계정 비율',
      progress: 80,
      icon: <CheckCircleOutline />,
      color: '#00C853',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        관리자 시스템
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} md={4} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Paper
            sx={{
              p: 3,
              background: 'linear-gradient(to right bottom, #FFFFFF, #F8F9FA)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  계정 분포
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  전체 계정 대비 관리자 계정 비율
                </Typography>
              </Box>
              <IconButton>
                <MoreVert />
              </IconButton>
            </Box>
            <CustomPieChart data={data} colors={COLORS} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminSystem; 