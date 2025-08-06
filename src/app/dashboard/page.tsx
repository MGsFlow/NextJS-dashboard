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
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from 'recharts';
import {
  TrendingUp,
  People,
  AttachMoney,
  ShowChart,
  MoreVert,
} from '@mui/icons-material';

// Data type definitions
interface AccountData {
  name: string;
  활성계정: number;
  비활성계정: number;
}

interface ActivityData {
  name: string;
  활동량: number;
}

interface RevenueData {
  name: string;
  매출: number;
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  progress: number;
  trend: string;
}

const data: AccountData[] = [
  { name: '1월', 활성계정: 40, 비활성계정: 24 },
  { name: '2월', 활성계정: 30, 비활성계정: 13 },
  { name: '3월', 활성계정: 20, 비활성계정: 98 },
  { name: '4월', 활성계정: 27, 비활성계정: 39 },
  { name: '5월', 활성계정: 18, 비활성계정: 48 },
  { name: '6월', 활성계정: 23, 비활성계정: 38 },
];

const activityData: ActivityData[] = [
  { name: '월', 활동량: 65 },
  { name: '화', 활동량: 59 },
  { name: '수', 활동량: 80 },
  { name: '목', 활동량: 81 },
  { name: '금', 활동량: 56 },
  { name: '토', 활동량: 55 },
  { name: '일', 활동량: 40 },
];

const areaData: RevenueData[] = [
  { name: '1월', 매출: 4000 },
  { name: '2월', 매출: 3000 },
  { name: '3월', 매출: 2000 },
  { name: '4월', 매출: 2780 },
  { name: '5월', 매출: 1890 },
  { name: '6월', 매출: 2390 },
];

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color, 
  progress, 
  trend 
}) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'visible',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 20px rgba(0,172,235,0.1)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          borderRadius: '16px 16px 0 0',
        },
      }}
      elevation={0}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Avatar
            sx={{
              background: `linear-gradient(135deg, ${color}, ${color}88)`,
              width: 56,
              height: 56,
              boxShadow: `0 8px 16px ${color}40`,
              transform: 'translateY(-28px)',
              border: '4px solid white',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-32px) scale(1.1)',
              },
            }}
          >
            {icon}
          </Avatar>
          <IconButton
            sx={{
              '&:hover': {
                background: 'rgba(0,172,235,0.1)',
              },
            }}
          >
            <MoreVert />
          </IconButton>
        </Box>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 1, 
            fontWeight: 'bold',
            background: `linear-gradient(135deg, ${color}, ${color}88)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              진행률
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <TrendingUp sx={{ color: color, fontSize: 16, mr: 0.5 }} />
              <Typography
                variant="body2"
                sx={{ color: color }}
              >
                {progress}%
              </Typography>
            </Box>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: `${color}20`,
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: `linear-gradient(90deg, ${color}, ${color}88)`,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const stats: StatCardProps[] = [
    {
      title: '총 계정 수',
      value: '1,234',
      icon: <People sx={{ fontSize: 32 }} />,
      color: '#00aceb',
      progress: 75,
      trend: '+12%',
    },
    {
      title: '관리자 계정 수',
      value: '56',
      icon: <ShowChart sx={{ fontSize: 32 }} />,
      color: '#64d6ff',
      progress: 45,
      trend: '+5%',
    },
    {
      title: '활성 계정 수',
      value: '987',
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      color: '#006185',
      progress: 80,
      trend: '+18%',
    },
    {
      title: '매출 현황',
      value: '￦35.7M',
      icon: <AttachMoney sx={{ fontSize: 32 }} />,
      color: '#2cc7ff',
      progress: 65,
      trend: '+8%',
    },
  ];

  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(0,172,235,0.1), transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 4, 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #00aceb, #64d6ff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        대시보드
      </Typography>
      
      <Grid container spacing={4}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}

        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 4,
              height: '100%',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 4,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 20px rgba(0,172,235,0.1)',
              },
            }}
            elevation={0}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography 
                variant="h6" 
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #00aceb, #64d6ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                계정 상태 추이
              </Typography>
              <IconButton
                sx={{
                  '&:hover': {
                    background: 'rgba(0,172,235,0.1)',
                  },
                }}
              >
                <MoreVert />
              </IconButton>
            </Box>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,172,235,0.1)" />
                  <XAxis dataKey="name" stroke="#454545" />
                  <YAxis stroke="#454545" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 12,
                      boxShadow: '0 8px 32px rgba(0,172,235,0.1)',
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="활성계정"
                    fill="#00aceb"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey="비활성계정"
                    fill="#64d6ff"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 4,
              height: '100%',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 4,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 20px rgba(0,172,235,0.1)',
              },
            }}
            elevation={0}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography 
                variant="h6" 
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #00aceb, #64d6ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                주간 활동량
              </Typography>
              <IconButton
                sx={{
                  '&:hover': {
                    background: 'rgba(0,172,235,0.1)',
                  },
                }}
              >
                <MoreVert />
              </IconButton>
            </Box>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <AreaChart
                  data={activityData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,172,235,0.1)" />
                  <XAxis dataKey="name" stroke="#454545" />
                  <YAxis stroke="#454545" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 12,
                      boxShadow: '0 8px 32px rgba(0,172,235,0.1)',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="활동량"
                    stroke="#00aceb"
                    fill="url(#colorGradient)"
                  />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00aceb" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#00aceb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 