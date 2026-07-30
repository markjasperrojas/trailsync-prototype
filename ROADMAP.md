# TrailSync Prototype — Working Roadmap

This checklist converts the development plan in `README.md` into the project’s progress tracker. Mark a task `[x]` only after it meets the Definition of Done at the end of this file. Work in order and finish each vertical slice before beginning the next one.

**Status legend:** `[ ]` not started · `[-]` in progress · `[x]` complete · `[!]` blocked

## Milestone 0 — Project Initialization

**Goal:** establish a clean, running Vite foundation with scalable architecture.

- [x] Create the Vite project.
- [x] Configure the recommended `src/` and `public/` folder structure.
- [x] Install required dependencies (Tailwind CSS, Lucide Icons, Chart.js, and Leaflet.js as needed).
- [x] Configure Git.
- [ ] Configure ESLint (optional).
- [ ] Configure Prettier (optional).
- [x] Configure Tailwind CSS.
- [x] Create global styles.
- [x] Define the color palette.
- [x] Define the typography system.

## Milestone 1 — Design System

**Goal:** build reusable UI components; do not add business logic yet.

- [x] Button
- [x] Input
- [x] Card
- [x] Badge / StatusBadge
- [x] Modal
- [x] Navbar
- [x] Sidebar
- [x] Breadcrumb
- [x] Progress Bar
- [x] Toast Notification
- [x] Loading Spinner

## Milestone 2 — Application Layout and Navigation

**Goal:** make every prototype page reachable through the application shell.

- [x] Public layout
- [x] Tourist dashboard layout
- [x] Guide dashboard layout
- [x] Admin / tourism-officer dashboard layout
- [x] Header, footer, navigation, and sidebar
- [x] Simple client-side routing
- [x] Page transitions
- [x] Verify navigation between all prototype pages

## Milestone 3 — Landing Page

- [x] Hero section
- [x] About TrailSync section
- [x] Key features section
- [x] Popular trails section
- [x] Calls to action
- [x] Login button
- [x] Book Trek button
- [x] Verify a professional, responsive landing page

## Milestone 4 — Authentication Prototype

**Goal:** simulate role-based access without a backend.

- [x] Login screen
- [x] Demo accounts: Tourist, Guide, and Tourism Officer
- [x] Role selection
- [x] Redirect each role to the appropriate dashboard
- [x] Verify the complete login flow

## Milestone 5 — Tourist Booking

**Goal:** complete the first end-to-end tourism workflow.

- [x] Choose trail
- [x] Choose schedule
- [x] Choose package
- [x] Assign guide
- [x] Review booking
- [x] Booking success screen
- [x] Multi-step form behavior and progress indicator
- [x] Booking summary
- [x] Centralized booking dummy data
- [x] Verify the complete booking workflow

## Milestone 6 — Guide Dispatching

**Goal:** demonstrate automated guide assignment.

- [x] Display available guides
- [x] Check guide availability from dummy data
- [x] Select/assign a guide for a booking
- [x] Show guide experience, availability, and assignment status
- [x] Assignment-complete state
- [x] Verify the guide-assignment module

## Milestone 7 — Live Trekker Monitoring

**Goal:** deliver the prototype’s highest-priority module.

- [x] Interactive map
- [x] Tourist marker
- [x] Guide marker
- [x] Simulated GPS movement with dummy coordinates
- [x] Trail progress
- [x] ETA and distance display
- [x] Progress timeline
- [x] Verify the live-tracking experience

## Milestone 8 — Weather Intelligence

- [x] Current weather display
- [x] Forecast display
- [x] Trail status
- [x] Risk level
- [x] Recommendation (for example, Safe / Proceed or Heavy Rain / Delay Trek)
- [x] Verify the weather-monitoring module

## Milestone 9 — SOS Emergency

- [x] SOS trigger
- [x] Confirmation dialog
- [x] Emergency-alert-sent state
- [x] Guide notification simulation
- [x] Tourism-office notification simulation
- [x] Location-sharing simulation
- [x] Verify the complete emergency-response flow

## Milestone 10 — Digital Certificate

- [x] Trek-completed trigger/state
- [x] Generate certificate
- [x] Certificate preview
- [x] Certificate download
- [x] Verify the certificate-generation prototype

## Milestone 11 — Analytics Dashboard

- [x] Dashboard cards: visitors, revenue, active treks, and guides
- [x] Visitor trends chart
- [x] Revenue chart
- [x] Popular trails chart
- [x] Guide workload chart
- [x] Weather delays chart
- [x] Safety incidents chart
- [x] Centralized analytics dummy data
- [x] Verify the executive analytics dashboard

## Milestone 12 — Final Polish

- [ ] Responsive design review (desktop and mobile)
- [ ] Accessibility improvements
- [ ] Animation refinement
- [ ] Consistent spacing
- [ ] Icon consistency
- [ ] Typography review
- [ ] Bug fixes
- [ ] Navigation validation
- [ ] Remove unused code
- [ ] Performance review
- [ ] Final presentation-ready review

## Definition of Done — Apply to Every Milestone

- [ ] Navigation works correctly.
- [ ] Components are reusable and UI is not duplicated.
- [ ] Dummy data is centralized.
- [ ] Code is modular: UI, logic, data, and utilities remain separate.
- [ ] Desktop and mobile layouts are responsive.
- [ ] Styling is consistent and buttons provide feedback.
- [ ] Folder structure remains organized.
- [ ] No console errors.
- [ ] Code is formatted and documented.

## Engineering Guardrails

- Keep solutions simple (KISS) and avoid unnecessary abstractions.
- Do not repeat UI, CSS, or JavaScript logic (DRY).
- Give each module one clear responsibility.
- Keep business logic independent from rendering.
- Build shared components once, then reuse them.
- Prefer readable, maintainable code over clever code.
