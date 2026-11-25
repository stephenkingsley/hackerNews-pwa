import { Linking, Platform } from 'react-native';

export const openExternalUrl = (url) => {
  if (!url) return;
  try {
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    } else {
      Linking.openURL(url);
    }
  } catch (e) {
    // ignore malformed urls, mirroring the original PWA behaviour
  }
};

export const openItemOnHackerNews = (id) => {
  openExternalUrl(`https://news.ycombinator.com/item?id=${id}`);
};
