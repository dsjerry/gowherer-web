# Gowherer Documentation Index

## Last Documentation Update

- **Date**: 2026-05-07
- **Gowherer Commit**: `274aef948bd677b2a9ce120b6b70a81f5f3cf084`
- **Branch**: main

## Documentation Coverage

This documentation update covers the following new features added to gowherer:

1. **Data Backup/Import** (`lib/data-backup.ts`)
   - Backup all app data (journeys, templates, preferences) to JSON
   - Restore from backup file with version validation

2. **Media Persistence** (`lib/media-storage.ts`)
   - Automatic media file copying to app-managed directory
   - Prevents media reference invalidation

3. **Background Location Tracking**
   - Continuous GPS tracking during active journeys
   - Track smoothing for noise reduction

4. **Journey Repository** (`lib/journey-repository.ts`)
   - Enhanced journey data management

## Next Update Should Start From

Commit: `274aef948bd677b2a9ce120b6b70a81f5f3cf084`

To find new commits since this update:
```bash
cd /d/Dev/mobile/expo/gowherer
git log 274aef948bd677b2a9ce120b6b70a81f5f3cf084..HEAD --oneline
```
