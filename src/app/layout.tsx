import Gnb from "@/components/feature/Gnb";
import { EmotionCacheProvider } from "@/styles/EmotionCacheProvider";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <EmotionCacheProvider>
          <GlobalStyles />
          <Gnb />

          <main>{children}</main>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
