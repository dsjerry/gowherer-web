# Getting Started

This documentation will help you quickly install and run GoWherer.

## Requirements

### Required Environment
- Node.js 18+
- npm (usually installed with Node.js)
- Git

### Supported Platforms
- Android: Android Studio + Android SDK
- iOS: Xcode (macOS only)
- Web: Modern browsers

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

### 3. Start Development Server
```bash
npm run dev
```

## Common Commands

```bash
npm run dev      # Local development
npm run build    # Build documentation site
npm run preview  # Preview build results
npm run lint     # Code linting
```

## FAQ

- Dependency installation failed: Clear cache and retry `npm cache clean --force && npm install`
- Port occupied: Close the occupying process or modify the development port
- Blank page: Check Node.js version and console error messages
