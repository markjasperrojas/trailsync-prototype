import { Button, Card, StatusBadge } from '../components/index.js'

export function PlaceholderPage({ eyebrow, title, description, actionLabel = 'Explore this module' }) {
  return `
    <main class="page-content">
      <p class="eyebrow">${eyebrow}</p>
      <h1>${title}</h1>
      <p class="page-content__intro">${description}</p>
      <div class="page-content__grid">
        ${Card({ eyebrow: 'Coming next', title: 'Workflow under construction', content: '<p>This page is connected to the application shell and will be completed in its dedicated milestone.</p>', footer: StatusBadge({ label: 'Prototype route ready', tone: 'info' }) })}
        <div class="page-content__action">${Button({ label: actionLabel, variant: 'secondary' })}</div>
      </div>
    </main>
  `
}
