import React from 'react';
import { Inter } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import ClientLayout from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MyNavi Admin',
  description: 'Admin dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <CssBaseline />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 