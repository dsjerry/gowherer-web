# Features

GoWherer is designed around one complete trip: capture as you go, then review and share it later. Journeys and media are stored locally by default. AI features are optional and send only the material needed for the requested analysis to the AI provider you configure.

## On the Road: Capture Without Interrupting Your Trip

### Timeline Recording
- **One Multimedia Timeline**: Text, location, photos, video, and voice — a whole trip on a single page, replayed in order later.
- **Template Quick Entry**: Built-in "Departure / Arrival / Rest / Checkpoint" templates fill preset text and tags in one tap; Travel and Commute keep separate collections, and custom templates are welcome.
- **Transportation Cost on the Go**: Metro, rail, bus, taxi, flight — pick a mode, add the fare, and the journey total is summed automatically.

### Automatic Location & Tracks
- **Background Track Recording**: Toggle it on and GoWherer continuously records GPS points, smoothed to reduce drift, with mileage accumulated via the Haversine formula.
- **Automatic Place Names**: Reverse geocoding turns coordinates into readable names, accelerated by a local grid cache that saves data and time.
- **Map Location Picker**: Tap the map or a nearby POI to pick a location; coordinates convert automatically between Amap and GPS systems.

## After the Trip: Review at a Glance

- **Journey Statistics**: Total distance, duration, average speed, and location points — computed automatically when the journey ends.
- **Segment Statistics**: Pick any start/end entries to see that segment's distance, duration, and average speed, highlighted on the map.
- **Review List & Detail Page**: Scan all journeys as summary cards, then open a detail page to revisit the timeline, photo wall, and track map.
- **Search & Filters**: Type (Travel/Commute), tags, and keywords help you find any past trip in seconds.

## AI Assistant: Review Journeys and Plan Walks

### AI Journey Analysis

- Analyze a journey from its detail page. AI uses the timeline, places, tags, fares, and available statistics to create a review saved with that journey; view it later or regenerate it.
- Analyze all journeys from the Review page to create an overview of travel habits, journey types, routes, and costs. Previous insights are saved by date.
- Configure an OpenAI-compatible provider, Base URL, model, and your own API key in Settings. The app can fetch available models and test the connection.

### AI City Walk

- Open City Walk from Home and choose an origin, time budget, interests, walking pace, and a loop or one-way route.
- GoWherer first gets real POI candidates from Amap. AI selects and orders only those candidates; Amap walking directions calculate each actual route leg, distance, and duration.
- Preview the map, stops, suggested stay times, and AI recommendations. Remove a stop and recalculate, save the plan, or start a regular journey linked to it.
- A planned walking route is kept separate from the device's actual GPS track; the plan line is never presented as a recorded track.

### AI and Data

AI uses bring-your-own-key (BYOK) and requires explicit configuration. A single-journey analysis sends that journey's text entries and relevant summaries; an overall review sends summaries of the journeys. Raw photo, video, and audio files and GPS track coordinates are not uploaded to AI. City Walk sends the current origin and candidate place information to AI, not journey history or media. Place search and route calculation make separate requests to Amap.

## Ready to Share: One-Tap Export

- **PDF Report**: Track map, stats summary, timeline details, and cost table in one document, with three templates: "Classic", "Data Brief", and "Keepsake".
- **Long Image Sharing**: The report renders into a single long image, ready for social media or group chats — no screenshot stitching.

## Built to Last: Your Data Stays Safe

- **Backup & Restore**: Journeys, City Walk plans, templates, and preferences export to one JSON file; restoring on a new phone just works.
- **Storage Governance**: Media files are hosted in an app-managed directory, cascade-cleaned on delete, with orphan scanning to reclaim space.
- **Nice Details**: Light/dark theme, English/Chinese UI, haptic feedback, and local log export for troubleshooting. Journeys, media, AI settings, and saved walk plans persist locally; AI requests go to the provider selected by the user.

## Interface Preview

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 20px;">
  <img src="/home-city-walk.jpg" alt="Home · City Walk Entry" style="width: 100%; border-radius: 8px;" />
  <img src="/city-walk-setup.jpg" alt="City Walk · Route Setup" style="width: 100%; border-radius: 8px;" />
  <img src="/city-walk-generating.jpg" alt="City Walk · Generation Progress" style="width: 100%; border-radius: 8px;" />
  <img src="/city-walk-route.jpg" alt="City Walk · Route Preview" style="width: 100%; border-radius: 8px;" />
  <img src="/going-light.jpg" alt="In Progress · Add Entry" style="width: 100%; border-radius: 8px;" />
  <img src="/list-light.jpg" alt="Journey Review List" style="width: 100%; border-radius: 8px;" />
  <img src="/detail-light.jpg" alt="Journey Detail Timeline" style="width: 100%; border-radius: 8px;" />
  <img src="/export-light.jpg" alt="Export Template Picker" style="width: 100%; border-radius: 8px;" />
  <img src="/ai-light.jpg" alt="AI Analysis" style="width: 100%; border-radius: 8px;" />
  <img src="/setting-light.jpg" alt="Settings" style="width: 100%; border-radius: 8px;" />
  <img src="/home-dark.jpg" alt="Dark Mode · Home" style="width: 100%; border-radius: 8px;" />
  <img src="/list-dark.jpg" alt="Dark Mode · Review List" style="width: 100%; border-radius: 8px;" />
</div>

Ready to try it? Head over to the [download page](/en/download) to install GoWherer.
