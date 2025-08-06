'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import MainLayout from './Layout/MainLayout';
import { theme } from '../theme'; // Corrected import path for theme

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <ThemeProvider theme={theme}>
      {isLoginPage ? (
        // Render only children for login page
        children
      ) : (
        // Render MainLayout for other pages
        <MainLayout>{children}</MainLayout>
      )}
    </ThemeProvider>
  );
} 