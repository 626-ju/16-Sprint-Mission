import Gnb from '@/components/feature/Gnb';
import QueryProvider from '@/lib/QueryProvider';
import { EmotionCacheProvider } from '@/styles/EmotionCacheProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <Toaster position='top-right' />
        <EmotionCacheProvider>
          <QueryProvider>
            <GlobalStyles />
            <Gnb />
            <main>{children}</main>
          </QueryProvider>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
