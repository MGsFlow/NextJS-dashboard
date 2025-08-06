'use client';

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const theme = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    employeeId: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.employeeId || !formData.password) {
      setError('사원번호와 비밀번호를 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      // API 호출로 로그인 로직 구현
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 임시 딜레이
      router.push('/dashboard');
    } catch (err) {
      setError('로그인에 실패했습니다. 사원번호와 비밀번호를 확인해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'primary.50',
        background: 'linear-gradient(135deg, #fbfeff 0%, #eefaff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '120%',
          height: '120%',
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(0,172,235,0.1) 0%, rgba(255,255,255,0) 70%)',
          animation: 'pulse 15s infinite',
        },
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0,172,235,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px rgba(0,172,235,0.2)',
          },
        }}
        elevation={0}
      >
        <Box sx={{ textAlign: 'center', mb: 2, position: 'relative' }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #00aceb, #64d6ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 1,
            }}
          >
            My Admin
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '2px',
                background: 'linear-gradient(45deg, #00aceb, #64d6ff)',
                borderRadius: '2px',
              },
            }}
          >
            관리자 시스템에 오신 것을 환영합니다
          </Typography>
        </Box>

        {error && (
          <Alert 
            severity="error" 
            onClose={() => setError(null)}
            sx={{
              borderRadius: 2,
              '& .MuiAlert-icon': {
                color: '#ff3d00',
              },
            }}
          >
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          required
          label="사원번호"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          disabled={loading}
          autoComplete="username"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#00aceb',
                borderWidth: 2,
              },
            },
          }}
        />

        <TextField
          fullWidth
          required
          type="password"
          label="비밀번호"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          autoComplete="current-password"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#00aceb',
                borderWidth: 2,
              },
            },
          }}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
          sx={{
            py: 1.5,
            background: 'linear-gradient(45deg, #00aceb, #64d6ff)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, #64d6ff, #00aceb)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,172,235,0.3)',
              '&::before': {
                opacity: 1,
              },
            },
          }}
        >
          {loading ? (
            <CircularProgress 
              size={24} 
              sx={{ 
                color: 'white',
                position: 'relative',
                zIndex: 1,
              }} 
            />
          ) : (
            '로그인'
          )}
        </Button>
      </Paper>
    </Box>
  );
} 