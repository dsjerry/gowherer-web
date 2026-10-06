# Getting Started

This section is for developers who want to run, build, or contribute to GoWherer locally. End users can install the app directly from the [download page](/en/download).

The instructions below cover the GoWherer main app. The documentation site is hosted in the [gowherer-web](https://github.com/dsjerry/gowherer-web) repository.

## Requirements

### Required Environment
- Node.js 20+
- npm (usually installed with Node.js)
- Git

### Supported Platforms
- **Android**: Android Studio + Android SDK (emulator or physical device)
- **iOS**: Xcode + CocoaPods (macOS only)
- **Web**: Modern browsers (Chrome/Firefox/Safari/Edge)

## Installation

### 1. Clone the Project
```bash
git clone https://github.com/dsjerry/gowherer.git
cd gowherer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables (Optional)

To use Amap's geocoding features, configure the API Key:

```bash
cp .env.example .env
```

Edit the `.env` file and fill in the following variables:

| Variable | Description |
|----------|-------------|
| `EXPO_PUBLIC_AMAP_WEB_KEY` | Amap Web API Key (used for reverse geocoding requests) |
| `AMAP_ANDROID_API_KEY` | Amap Android SDK Key (used for native map rendering on Android) |
| `AMAP_ANDROID_DEBUG_KEY` | Amap debug key (optional, for map rendering in local debug builds) |
| `EXPO_PUBLIC_REVERSE_GEOCODE_PROVIDER` | Reverse geocode provider: `amap` (Amap) or `system` (system native), defaults to `amap` |
| `APP_VERSION` | Override app version (optional, for local/EAS builds) |
| `EAS_PROJECT_ID` | EAS project ID (optional, app.config.ts has built-in default) |

### 4. Start Development Server

```bash
npx expo start
```

Follow the prompts in the terminal to choose a platform:
- Press `a` to launch Android emulator or connected device
- Press `i` to launch iOS simulator (macOS)
- Press `w` to launch Web version
- Press `r` to restart Expo preview server

## Project Structure

```
gowherer/
├── app/                     # Page routes (using expo-router)
│   ├── (tabs)/              # Tab navigation routes
│   │   ├── index.tsx        # Journey recording (main page)
│   │   ├── explore.tsx      # Journey review (summary list)
│   │   └── settings.tsx     # Settings page
│   ├── journey-detail.tsx   # Journey detail page (timeline/media/track/export)
│   ├── location-picker.tsx  # Map location picker page
│   ├── permissions.tsx      # Permission management page
│   ├── licenses.tsx         # Open source licenses page
│   └── modal.tsx            # Modal page
├── components/              # Reusable UI components
│   ├── active-journey-card.tsx    # Active journey card
│   ├── journey-report-view.tsx    # Export report renderer
│   ├── swipe-tab-bar.tsx          # Swipeable bottom tab bar
│   ├── template-modal.tsx         # Template management modal
│   ├── timeline-list.tsx          # Timeline list
│   ├── track-map.tsx / track-map.web.tsx # Track map (native/web)
│   └── ...
├── hooks/                   # Custom React Hooks
│   ├── use-journeys.ts           # Journey data loading
│   └── use-location-tracking.ts  # Background location tracking
├── lib/                     # Core service modules
│   ├── journey-storage.ts        # Journey data persistence
│   ├── journey-repository.ts     # Journey write queue with media cascade cleanup
│   ├── journey-stats.ts          # Trip statistics and segment stats
│   ├── journey-cost.ts           # Transportation cost aggregation
│   ├── journey-pdf.ts            # PDF/long-image export
│   ├── report-templates.ts       # Report templates (classic/compact)
│   ├── template-storage.ts       # Template management
│   ├── template-storage-i18n.ts  # Per-locale template storage
│   ├── track-utils.ts            # Track sanitizing/smoothing/measuring
│   ├── reverse-geocode.ts        # Reverse geocoding and coordinate conversion
│   ├── geocode-cache.ts          # Reverse geocoding local cache
│   ├── current-location.ts       # Current location resolution
│   ├── background-location.ts    # Background location tracking
│   ├── media-storage.ts          # Media persistence and orphan scanning
│   ├── media-migration.ts        # Media file migration
│   ├── data-backup.ts            # Data backup and restore
│   ├── license-catalog.ts        # Open source license catalog
│   ├── amap-privacy.ts           # Amap SDK privacy compliance
│   ├── storage-keys.ts           # Centralized AsyncStorage keys
│   └── local-log.ts              # Local logging
├── types/                   # TypeScript type definitions
├── locales/                 # Internationalization resources
└── constants/               # Theme colors, fonts, and other constants
```

## Common Commands

```bash
npx expo start        # Start development server
npx expo prebuild     # Generate native project code (Android/iOS)
npx expo run:android  # Run Android app
npx expo run:ios      # Run iOS app (macOS)
npm run lint          # Code linting
npm run format        # Prettier formatting
npm run licenses:generate # Regenerate the open source license catalog
```

## FAQ

### Dependency installation failed
Clear cache and retry:
```bash
npm cache clean --force && rm -rf node_modules && npm install
```

### Amap API Key not working
- Verify that the `.env` file exists and variable names are correct
- Changes to `app.config.ts` require re-running `npx expo prebuild`
- Web reverse geocoding requires `EXPO_PUBLIC_AMAP_WEB_KEY`
- Android native map requires `AMAP_ANDROID_API_KEY` (debug builds can use `AMAP_ANDROID_DEBUG_KEY`)

### Blank page or white screen
- Check Node.js version (requires 20+)
- Check console error messages
- Try clearing Metro cache: `npx expo start --clear`

### AMap SDK features unavailable
AMap SDK features (place picker, native track map) require a custom Dev Client or an EAS build; they are not available in Expo Go.
