# hackerNews-pwa (React Native / Expo)

Hacker News client rebuilt as a cross-platform **React Native (Expo)** app from the
original CRA + Redux PWA. It runs on **web** (via `react-native-web`) and **native**
(iOS / Android) from a single codebase, preserving the original feature set:

- Five channels: **news / new / show / ask / jobs**
- Paginated lists (30 items per page, prev / next)
- Story detail screen with recursively nested comments
- Data from `https://node-hnapi.herokuapp.com` (`/{type}?page=N` and `/item/{id}`)

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | React Native `0.73` (Expo `~50`) |
| Web | `react-native-web` `0.19` (Expo webpack bundler) |
| Navigation | `react-navigation` v6 (`native-stack`) with URL linking for web/native parity |
| Lists / touch | `FlatList`, `TouchableOpacity` |
| Entry point | `node_modules/expo/AppEntry.js` → `App.js` |

## Project structure

```
App.js                      # NavigationContainer + native-stack + linking config
src/
  api/hackerNewsApi.js      # fetch wrappers: getData(type, page), getItem(id)
  navigation/linking.js     # URL deep-linking config (web & native routes)
  screens/
    ChannelListScreen.js    # channel list (FlatList), pagination, top bar
    StoryScreen.js          # story detail + nested comments
  components/
    TopBar.js               # dark #222 channel bar (news/new/show/ask/jobs)
    Item.js                 # list row: index, title, points, by/time/comments
    Comment.js              # top-level comment (indented nested children)
    CommentItem.js          # recursive comment body (tap -> HN reply page)
    Loading.js              # spinner
  utils/
    openLink.js             # cross-platform link opening (web: window.open, native: Linking)
    html.js                 # HTML entity / tag handling for comment text
```

## Prerequisites

- Node.js >= 18 and npm
- For native: Expo Go app on a device, **or** Android Studio / Xcode simulators

## Run on the web

```bash
npm install
npm run web          # expo start --web
```

The dev server compiles and opens at `http://localhost:19006`. The list page loads the
news channel automatically; use the top bar to switch channels, the footer to open a
story, and prev/next to paginate. Deep links such as `/item/:id`, `/ask/?page=2` work
in the browser.

## Run on native (iOS / Android)

```bash
npm install
npm start            # expo start (Metro dev server on :8081)
```

Then either:

- **Expo Go**: scan the QR code shown in the terminal with the Expo Go app, or
- **Android**: `npm run android` (requires a connected device or emulator), or
- **iOS**: `npm run ios` (requires macOS with Xcode).

### Offline bundle check (no emulator needed)

```bash
npm run bundle:android   # writes /tmp/index.android.bundle + /tmp/android-assets
npm run bundle:ios       # writes /tmp/index.ios.bundle  + /tmp/ios-assets
```

## Build the static web bundle

```bash
npx expo export:web      # outputs ./web-build
```

Serve `web-build/` with any static host. A `serve.json` with an SPA fallback rewrite
is included so deep links resolve to `index.html` (e.g. `npx serve web-build`).

## Notes

- Pagination is component-local state synced to the URL (`?page=N`) for shareable links,
  matching the original PWA's `/:channel/:page` scheme.
- Comment HTML is rendered as plain text with links/entities handled, mirroring the
  original `dangerouslySetInnerHTML` behaviour safely across platforms.
