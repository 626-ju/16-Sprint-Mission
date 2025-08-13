import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

export function createEmotionCache() {
  return createCache({ key: 'css' });
}

export const cache = createEmotionCache();

export const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

export function renderEmotionStyles(html: string) {
  const emotionChunks = extractCriticalToChunks(html);
  return constructStyleTagsFromChunks(emotionChunks);
}
