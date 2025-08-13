import Gnb from '@/components/feature/Gnb';
import QueryProvider from '@/lib/QueryProvider';
import { EmotionCacheProvider } from '@/styles/EmotionCacheProvider';
import GlobalStyles from '@/styles/GlobalStyles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
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
