# Getting Started

This documentation will help you quickly install and run the GoWherer main app. The documentation site is hosted in the [gowherer-web](https://github.com/dsjerry/gowherer-web) repository.

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
├── app/                 # Page routes (using expo-router)
│   ├── (tabs)/          # Tab navigation routes
│   │   ├── index.tsx    # Journey timeline (main page)
│   │   ├── explore.tsx  # Journey review and search
│   │   └── settings.tsx # Settings page
│   ├── location-picker.tsx  # Map location picker page
│   ├── permissions.tsx      # Permission management page
│   └── licenses.tsx         # Open source licenses page
├── components/          # Reusable UI components
├── hooks/              # Custom React Hooks
├── lib/                # Core service modules
│   ├── journey-storage.ts    # Journey data persistence
│   ├── template-storage.ts   # Template management
│   ├── track-utils.ts        # Track processing
│   ├── reverse-geocode.ts    # Geocoding
│   └── local-log.ts          # Local logging
├── types/              # TypeScript type definitions
├── locales/            # Internationalization resources
└── constants/          # Theme colors, fonts, and other constants
```

## Common Commands

```bash
npx expo start       # Start development server
npx expo prebuild    # Generate native project code (Android/iOS)
npx expo run:android # Run Android app
npx expo run:ios     # Run iOS app (macOS)
npx expo export       # Export Web static assets
npm run lint          # Code linting
npm run typecheck     # TypeScript type checking
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
- Android native map requires `AMAP_ANDROID_API_KEY`

### Blank page or white screen
- Check Node.js version (requires 20+)
- Check console error messages
- Try clearing Metro cache: `npx expo start --clear`