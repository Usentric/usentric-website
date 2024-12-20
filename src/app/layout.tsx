
import { ReactNode } from 'react';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import theme from '../theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Usentric",
  description: "Full-Service Digital Design, Development, and Hosting Solutions",
  icons: { icon: "/usentric.svg" }
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: '0' }} className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ backgroundColor: 'background.default', color: 'text.primary', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}