# Tech Stack

GoWherer adopts a modern frontend and cross-platform technology combination, balancing development efficiency, performance, and maintainability.

## App Layer
- Expo SDK 55
- React Native 0.83.6
- React 19.2.0
- TypeScript
- expo-router (File-based routing)

## Maps & Location
- expo-gaode-map (Amap SDK wrapper, including place picker and positioning)
- expo-location (positioning and system reverse geocoding)
- expo-task-manager (background tasks, powering background track recording)
- Amap Web Service APIs (City Walk POI search and walking directions; called by the client by default, with an optional self-hosted proxy)

## AI
- Vercel AI SDK (`ai`) and `@ai-sdk/openai-compatible`
- User-provided AI provider, Base URL, model, and API key (BYOK)
- AI analyzes journeys or orders candidate places; Amap remains the source for places and route geometry
- No MCP dependency; City Walk can optionally use `EXPO_PUBLIC_CITY_WALK_API_BASE_URL` to proxy Amap Web requests through a self-hosted service

## Media Processing
- expo-image-picker (camera capture and album import)
- expo-audio (recording and playback)
- expo-video (video playback)
- expo-image-manipulator (image downscaling and compression before export)
- expo-video-thumbnails (video thumbnails)

## Export & Sharing
- expo-print (PDF generation)
- expo-sharing (system share sheet)
- expo-file-system (file I/O and media hosting)

## Data & Storage
- SQLite for journeys and track points on Android/iOS; AsyncStorage for Web journeys, preferences, AI settings/insights, and City Walk plans
- Media files live in an app-managed directory; journeys and plans can be backed up/restored as JSON
- Local log files (troubleshooting)

## Documentation & Site
- VitePress
- Vue 3
- Markdown

## Tooling
- ESLint / Prettier (code style and formatting)
- GitHub Actions (CI and release pipelines)
- EAS Build (cloud builds)

## Design Principles
- Cross-platform First: Same business logic covers mobile and Web.
- Local First: Journeys and media are persisted on device; AI and map features make on-demand requests to the user-selected provider or Amap, without requiring a GoWherer-owned backend.
- Maintainability First: Modular organization and clear boundaries (storage, stats, export, geo services).
- Experience First: Focus on loading speed and interaction smoothness, aided by caching and request deduplication.
