import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00aceb', // Vibrant blue
      light: '#64d6ff',
      dark: '#006185',
    },
    secondary: {
      main: '#f06400', // Vibrant orange
      light: '#ffa667',
      dark: '#873800',
    },
    background: {
      default: '#fbfeff', // Very light blue-ish white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1e1e1e', // Dark grey
      secondary: '#454545', // Medium grey
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    fontFamily: '"Meiryo", "Inter", sans-serif',
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 16, // Slightly more rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 20px',
          boxShadow: '0 2px 4px rgba(0,172,235,0.1)', // Subtle shadow
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,172,235,0.2)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00aceb, #64d6ff)',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(45deg, #006185, #00aceb)',
          },
        },
        outlined: {
          borderColor: '#00aceb',
          color: '#00aceb',
          '&:hover': {
            background: 'rgba(0,172,235,0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Softer shadow
          background: 'rgba(255, 255, 255, 0.9)', // Slight transparency
          backdropFilter: 'blur(10px)', // Frosted glass effect
          border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,172,235,0.15)',
            transform: 'translateY(-3px)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        },
        elevation1: { boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
        elevation2: { boxShadow: '0 8px 30px rgba(0,172,235,0.15)' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00aceb',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00aceb',
              borderWidth: 2,
            },
          },
          '& .MuiInputLabel-root': {
            color: '#454545',
            '&.Mui-focused': {
              color: '#00aceb',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          borderBottom: '1px solid rgba(0, 172, 235, 0.1)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
          boxShadow: '4px 0 24px rgba(0,172,235,0.05)',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 172, 235, 0.1)',
        },
        head: {
          fontWeight: 600,
          background: 'rgba(0, 172, 235, 0.05)',
          color: '#006185',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#1e1e1e',
          color: '#fff',
          borderRadius: 8,
          padding: '8px 12px',
        },
        arrow: {
          color: '#1e1e1e',
        },
      },
    },
  },
}); 