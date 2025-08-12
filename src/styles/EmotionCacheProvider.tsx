'use client';

import React, { ReactNode } from 'react';
// import { useServerInsertedHTML } from "next/navigation";
import { ThemeProvider } from '@emotion/react';

import { theme } from './theme';
// import { createEmotionCache } from "@/lib/emotionServer";

interface Props {
  children?: ReactNode;
}

export function EmotionCacheProvider({ children }: Props) {
  //   const [emotionCache] = useState(() => createEmotionCache());

  //   useServerInsertedHTML(() => {
  //     const inserted = Object.values(emotionCache.inserted);
  //     const keys = Object.keys(emotionCache.inserted).join(" ");
  //     if (inserted.length === 0) return null;

  // return (
  //   <style
  //     data-emotion={`${emotionCache.key} ${keys}`}
  //     dangerouslySetInnerHTML={{ __html: inserted.join(" ") }}
  //   />
  // );
  // });
  return (
    // <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // </CacheProvider>
  );
}
