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
- AsyncStorage (local persistence for structured data)
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
- Local First: Core data is locally available as a premise, with no backend dependency.
- Maintainability First: Modular organization and clear boundaries (storage, stats, export, geo services).
- Experience First: Focus on loading speed and interaction smoothness, aided by caching and request deduplication.
