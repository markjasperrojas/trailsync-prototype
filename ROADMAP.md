# TrailSync Prototype — Working Roadmap

This checklist converts the development plan in `README.md` into the project’s progress tracker. Mark a task `[x]` only after it meets the Definition of Done at the end of this file. Work in order and finish each vertical slice before beginning the next one.

**Status legend:** `[ ]` not started · `[-]` in progress · `[x]` complete · `[!]` blocked

## Milestone 0 — Project Initialization

**Goal:** establish a clean, running Vite foundation with scalable architecture.

- [x] Create the Vite project.
- [x] Configure the recommended `src/` and `public/` folder structure.
- [x] Install required dependencies (Tailwind CSS, Lucide Icons, Chart.js, and Leaflet.js as needed).
- [x] Configure Git.
- [x] Configure ESLint (optional).
- [x] Configure Prettier (optional).
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

## Milestone 5A — Tourism Officer Booking Approval

**Goal:** route tourist booking requests through Tourism Office review before tour guide management.

- [x] Create centralized booking-request records and statuses.
- [x] Submit new tourist bookings as pending approval requests.
- [x] Add an officer-only Booking Approvals route and sidebar entry.
- [x] Display pending, approved, and rejected requests with booking details.
- [x] Approve or reject pending booking requests.
- [x] Make approved requests available to the Tour Guide Management module.
- [x] Update the request when it is sent to a guide.
- [x] Verify the request-to-approval state flow.

## Milestone 5B — Role-Based Navigation and Access Control

**Goal:** keep navigation consistent with the signed-in role and prevent prototype pages from appearing under the wrong portal.

- [x] Select public or dashboard layout from the active user session.
- [x] Keep each signed-in role’s sidebar stable across allowed pages.
- [x] Define allowed roles for every protected route.
- [x] Show an access-denied state for unavailable role/page combinations.
- [x] Keep logged-out users in the public navigation shell.
- [ ] Add dedicated “My Bookings” and “Assigned Treks” pages if the prototype scope expands.

## Milestone 5C — Guide Assignment Response and Availability

**Goal:** let guides manage their availability and respond to assignments sent by the Tourism Office.

- [x] Add a guide-specific My Assignments page and sidebar entry.
- [x] Keep guide management available only to Tourism Officers.
- [x] Link the guide demo account to a guide profile.
- [x] Show guide availability and allow Available/Unavailable changes.
- [x] Display pending assignment requests for the signed-in guide.
- [x] Let guides accept or decline an assignment.
- [x] Return declined requests to the approved guide-management queue.
- [x] Record accepted requests as guide-confirmed.
- [x] Verify the guide assignment and availability state flow.

## Milestone 5D — Guide Profile Management

**Goal:** let guides maintain the operational details used by Tourism Officer guide management.

- [x] Add a My Profile route and Guide sidebar entry.
- [x] Display guide contact and operational profile information.
- [x] Let guides edit name, mobile number, experience, specialties, certifications, and bio.
- [x] Keep the demo email address read-only.
- [x] Validate required fields and mobile number before saving.
- [x] Add Save and Cancel feedback.
- [x] Centralize profile data in the Guide service for Tour Guide Management reuse.
- [x] Verify formatting, linting, and production build.

## Milestone 5E — Guide Schedule

**Goal:** give guides one clear view of their confirmed upcoming treks.

- [x] Add a guide-only My Schedule route and sidebar entry.
- [x] Show only assignments accepted by the signed-in guide.
- [x] Display trek date, trail, lead hiker, group size, package, and confirmation status.
- [x] Add an empty state and a centralized confirmed demo assignment.
- [x] Keep assignment acceptance in My Assignments and schedule changes with the Tourism Office.
- [x] Verify formatting, linting, and production build.

## Milestone 5F — Tourism Officer Guide Management

**Goal:** give Tourism Officers one view of guide availability, workload, and booking assignment.

- [x] Replace the former assignment sidebar entry and route with Tour Guide Management.
- [x] Display the guide roster with experience, specialties, availability, and workload.
- [x] Summarize available guides, pending guide responses, and confirmed treks.
- [x] Keep approved-booking assignment within the management page.
- [x] Make sent assignments clearly await a guide response before confirmation.
- [x] Keep guide profile editing with guides; officers have a read-only operational view.
- [x] Verify formatting, linting, and production build.

## Milestone 5G — Public Trail Discovery and Booking Access

**Goal:** let visitors discover trails while keeping booking actions within the Tourist workspace.

- [x] Add a public Trails route and point the public navigation to it.
- [x] Display Alto Peak, Sulfatara, and Mount Janagdan with Brgy. Cabintan details.
- [x] Restrict the booking workflow to signed-in Tourist accounts.
- [x] Show a clear sign-in prompt to visitors who open a protected page.
- [x] Keep role-mismatched protected pages unavailable.
- [x] Update landing-page trail calls to action.
- [x] Verify formatting, linting, and production build.

## Milestone 5H — Account Access Experience

**Goal:** make account entry feel complete while keeping authentication safely simulated in the frontend prototype.

- [x] Add Remember me controls for role selection and Tourist registration.
- [x] Store remembered sessions locally and temporary sessions for the active browser session.
- [x] Add a password-recovery route with validation and confirmation feedback.
- [x] Add Tourist-only account registration with validation and success state.
- [x] Keep Guide and Tourism Officer accounts issued through the Tourism Office.
- [x] Link sign-in, password recovery, and registration screens.
- [x] Verify formatting, linting, and production build.

## Milestone 6 — Guide Assignment Workflow

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

- [x] Responsive design review (desktop and mobile)
- [x] Accessibility improvements
- [x] Animation refinement
- [x] Consistent spacing
- [x] Icon consistency
- [x] Typography review
- [x] Bug fixes
- [x] Navigation validation
- [x] Remove unused code
- [x] Performance review
- [x] Final presentation-ready review

## Definition of Done — Apply to Every Milestone

- [x] Navigation works correctly.
- [x] Components are reusable and UI is not duplicated.
- [x] Dummy data is centralized.
- [x] Code is modular: UI, logic, data, and utilities remain separate.
- [x] Desktop and mobile layouts are responsive.
- [x] Styling is consistent and buttons provide feedback.
- [x] Folder structure remains organized.
- [x] No console errors.
- [x] Code is formatted and documented.

## Engineering Guardrails

- Keep solutions simple (KISS) and avoid unnecessary abstractions.
- Do not repeat UI, CSS, or JavaScript logic (DRY).
- Give each module one clear responsibility.
- Keep business logic independent from rendering.
- Build shared components once, then reuse them.
- Prefer readable, maintainable code over clever code.
