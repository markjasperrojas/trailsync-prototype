import { Card, StatusBadge } from '../../components/index.js'
import { getCurrentUser } from '../../services/authService.js'
import { getLatestRequestForHiker } from '../../services/approvalService.js'

const roleContent = {
  tourist: {
    title: 'Your next adventure starts here.',
    description:
      'Browse trails, manage upcoming reservations, and keep your trek details close at hand.',
    cards: [
      ['Upcoming trek', 'No active bookings yet'],
      ['Trail conditions', 'Check the latest weather before you go'],
    ],
  },
  guide: {
    title: 'Your trail day, organized.',
    description:
      'Review assigned groups, stay on top of trek progress, and respond quickly when support is needed.',
    cards: [
      ['Today’s groups', 'No treks assigned today'],
      ['Live monitoring', 'All tracked groups are safe'],
    ],
  },
  officer: {
    title: 'Tourism operations, in view.',
    description:
      'Keep an eye on visitors, active treks, guide capacity, and safety across your community.',
    cards: [
      ['Active treks', 'No live groups at the moment'],
      ['Operations status', 'All systems ready'],
    ],
  },
}

export function DashboardPage() {
  const user = getCurrentUser()
  const details = roleContent[user?.role] ?? roleContent.tourist
  const latestRequest = user?.role === 'tourist' ? getLatestRequestForHiker(user.name) : null
  const statusTone = { pending: 'warning', approved: 'success', rejected: 'danger' }

  return `
    <main class="page-content dashboard-page">
      <p class="eyebrow">${user?.roleLabel ?? 'TrailSync'}</p>
      <h1>Welcome, ${user?.name?.split(' ')[0] ?? 'Explorer'}.</h1>
      <p class="page-content__intro">${details.description}</p>
      <div class="dashboard-page__cards">
        ${latestRequest ? Card({ title: 'Latest booking request', content: `<p>${latestRequest.trail} · ${latestRequest.schedule}</p>`, footer: StatusBadge({ label: latestRequest.status === 'pending' ? 'Pending Tourism Office approval' : latestRequest.status, tone: statusTone[latestRequest.status] }) }) : ''}
        ${details.cards.map(([title, message]) => Card({ title, content: `<p>${message}</p>`, footer: StatusBadge({ label: 'Prototype data', tone: 'info' }) })).join('')}
      </div>
    </main>
  `
}
