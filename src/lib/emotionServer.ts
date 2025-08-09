import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

const cache = createEmotionCache();
const { extractCriticalToChunks, constructStyleTagsFromChunks } =
  createEmotionServer(cache);

export function renderEmotionStyles(html: string) {
  const emotionChunks = extractCriticalToChunks(html);
  return constructStyleTagsFromChunks(emotionChunks);
}
