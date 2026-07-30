# TrailSync Prototype

## Project Guide

TrailSync is a frontend-only tourism-management prototype. It demonstrates the full visitor journey—from discovering a trail and booking a trek to live monitoring, emergency response, certificates, and tourism-office analytics. All dynamic content is local mock data; no backend or external API is required.

### Run locally

1. Install a current Node.js LTS release (Node 20+ recommended).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL Vite prints, normally `http://localhost:5173`.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check JavaScript with ESLint. |
| `npm run lint:fix` | Automatically fix supported lint issues. |
| `npm run format` | Format source files with Prettier. |
| `npm run format:check` | Verify source-file formatting without changing files. |

### Demo sign-in accounts

Open `#/login` and select one of the one-click demo accounts. Passwords are intentionally not required in this prototype.

| Role | Demo user | Dashboard |
| --- | --- | --- |
| Tourist | Maria Santos | `#/tourist` |
| Guide | Daniel Reyes | `#/guide` |
| Tourism Officer | Ava Cruz | `#/admin` |

### Prototype routes

The application uses hash-based routing, so routes can be opened directly after the local URL.

| Route | Module |
| --- | --- |
| `#/` | Landing page |
| `#/login` | Demo authentication |
| `#/booking` | Tourist booking workflow |
| `#/dispatch` | Guide dispatching |
| `#/tracking` | Live trekker monitoring and GPS simulation |
| `#/weather` | Weather intelligence |
| `#/sos` | Emergency-response simulation |
| `#/certificate` | Digital certificate generation and download |
| `#/analytics` | Tourism-office analytics dashboard |

### Project architecture

- `src/components/` contains reusable UI building blocks.
- `src/layouts/` contains public and role-based dashboard shells.
- `src/pages/` contains route-level screen rendering.
- `src/services/` owns interactive prototype state and actions.
- `src/data/` contains centralized mock data.
- `src/modules/` contains integration-specific code, including Leaflet maps and Chart.js charts.
- `src/router/` defines application routes and hash navigation.
- `src/styles/` contains global design tokens and responsive styling.

### Prototype notes

- Authentication is simulated with browser local storage.
- Booking, dispatching, tracking, weather, SOS, certificates, and analytics use mock data only.
- The tracking map uses OpenStreetMap tiles; an internet connection improves map-tile loading during local use.
- The downloaded certificate is an HTML file so it can be opened or printed as a record of completion.
