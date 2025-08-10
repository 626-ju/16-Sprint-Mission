'use client';

/** @jsxImportSource @emotion/react */
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import '@/styles/reset.css';

import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import Gnb from '@/components/feature/Gnb';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider theme={theme}>
          <Gnb />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
