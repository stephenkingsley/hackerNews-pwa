// Mirrors the original PWA URL scheme:
//   /:page          -> news
//   /newest/:page   -> newest
//   /show/:page     -> show
//   /ask/:page      -> ask
//   /jobs/:page     -> jobs
//   /item/:id       -> story detail
export const linking = {
  prefixes: [],
  config: {
    screens: {
      news: ':page(1|[0-9]+)?',
      newest: 'newest/:page(1|[0-9]+)?',
      show: 'show/:page(1|[0-9]+)?',
      ask: 'ask/:page(1|[0-9]+)?',
      jobs: 'jobs/:page(1|[0-9]+)?',
      item: 'item/:id',
    },
  },
};
