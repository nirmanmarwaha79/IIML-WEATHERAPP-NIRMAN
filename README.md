# SkyScout — Weather & Local Discovery

Next.js + TypeScript app for a city-based 10-day weather forecast, forecast-aware outdoor suggestions, nearby sightseeing places and local events.

## Run locally
Requires Node.js 20+.
```bash
npm install
npm run dev
```
Open http://localhost:3000. The app initially loads Bengaluru; enter another city in the search field.

## Data providers
- **Weather and geocoding:** Open-Meteo. No API key required. Forecast endpoint returns 10 daily forecast rows.
- **Sightseeing:** OpenStreetMap data via the public Overpass API. No key required; results and availability depend on OSM mapping coverage.
- **Events:** Ticketmaster Discovery API. An API key is required, and coverage varies by country and organizer.

## Enable events
1. Register for an API key at https://developer.ticketmaster.com/.
2. Copy `.env.example` to `.env.local`.
3. Set `TICKETMASTER_API_KEY=your_actual_key`.
4. Restart `npm run dev`.
5. For Vercel, add the same variable under Project → Settings → Environment Variables and redeploy.

The key is read only by the server route. Never commit `.env.local`.

## Deploy with GitHub + Vercel
1. Create a GitHub repository and extract this ZIP.
2. In the project folder run:
```bash
git init
git add .
git commit -m "Initial SkyScout weather app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
3. In https://vercel.com choose Add New → Project and import the GitHub repository.
4. Vercel detects Next.js. Add `TICKETMASTER_API_KEY` if you want event listings, then Deploy.
5. Future pushes to the connected GitHub branch deploy automatically.

## Notes
- Outdoor activity ideas are generated from forecast data and are not official weather or safety advice.
- Check official forecasts, warnings, event dates, venue details and ticket availability before making plans.
- OpenStreetMap attribution: © OpenStreetMap contributors.
- Public community APIs can rate-limit requests. For production use, consider managed providers and caching.
