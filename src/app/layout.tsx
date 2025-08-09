"use client"

/** @jsxImportSource @emotion/react */
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';

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
      <body className="">
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
