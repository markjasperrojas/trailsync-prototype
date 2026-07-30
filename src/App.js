import {
  Breadcrumb,
  Button,
  Card,
  Input,
  LoadingSpinner,
  Modal,
  Navbar,
  ProgressBar,
  Sidebar,
  StatusBadge,
  Toast,
} from './components/index.js'

function Section({ title, description, content }) {
  return `<section class="gallery-section"><div class="gallery-section__heading"><h2>${title}</h2><p>${description}</p></div>${content}</section>`
}

export function App() {
  const modalActions = `${Button({ label: 'Cancel', variant: 'ghost', size: 'sm' })}${Button({ label: 'Confirm booking', size: 'sm' })}`

  return `
    <main class="gallery-shell">
      <div class="gallery-intro">
        <p class="eyebrow">Milestone 1</p>
        <h1>TrailSync design system</h1>
        <p>Reusable interface building blocks for the complete tourism workflow.</p>
      </div>
      ${Section({ title: 'Navigation', description: 'Consistent ways to move across public and dashboard experiences.', content: `<div class="gallery-stack">${Navbar({ items: [{ label: 'Explore', active: true }, { label: 'Trails' }, { label: 'About' }] })}${Breadcrumb({ items: ['Dashboard', 'Bookings', 'New booking'] })}<div class="sidebar-preview">${Sidebar({ title: 'Tourist portal', items: [{ label: 'Overview' }, { label: 'My bookings', active: true }, { label: 'Profile' }] })}</div></div>` })}
      ${Section({ title: 'Actions and feedback', description: 'Clear controls and immediate system feedback.', content: `<div class="gallery-row">${Button({ label: 'Book a trek' })}${Button({ label: 'View details', variant: 'secondary' })}${Button({ label: 'Save for later', variant: 'ghost' })}${Button({ label: 'Cancel trek', variant: 'danger' })}</div><div class="gallery-row">${StatusBadge({ label: 'Confirmed', tone: 'success' })}${StatusBadge({ label: 'Weather watch', tone: 'warning' })}${StatusBadge({ label: 'SOS active', tone: 'danger' })}${StatusBadge({ label: 'In progress', tone: 'info' })}${LoadingSpinner({ label: 'Syncing trek data' })}</div>${Toast({ title: 'Booking saved', message: 'Your trek details are ready for review.' })}` })}
      ${Section({ title: 'Forms and content', description: 'Accessible inputs and flexible content containers.', content: `<div class="gallery-grid"><div>${Input({ id: 'visitor-name', label: 'Full name', placeholder: 'Juan dela Cruz', hint: 'Use the name shown on your identification.', required: true })}</div>${Card({ eyebrow: 'Mt. Pulag', title: 'Sunrise trek', content: '<p>A guided overnight experience with a pre-dawn summit view.</p>', footer: `${StatusBadge({ label: '12 slots available', tone: 'success' })}` })}</div>` })}
      ${Section({ title: 'Progress and overlay', description: 'Status information for multi-step journeys and confirmations.', content: `<div class="gallery-grid gallery-grid--wide"><div class="progress-panel">${ProgressBar({ value: 60, label: 'Booking details complete' })}</div>${Modal({ title: 'Confirm your booking', content: '<p>Review the selected trail, date, and guide before submitting.</p>', actions: modalActions })}</div>` })}
    </main>
  `
}
