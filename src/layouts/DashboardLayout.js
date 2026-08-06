import { Breadcrumb, Sidebar } from '../components/index.js'
import { getCurrentUser } from '../services/authService.js'

const dashboardItems = [
  { label: 'Book a trek', href: '#/booking', route: '/booking', portals: ['tourist'] },
  {
    label: 'Guide dispatch',
    href: '#/dispatch',
    route: '/dispatch',
    portals: ['guide', 'officer'],
  },
  { label: 'Live tracking', href: '#/tracking', route: '/tracking', portals: ['guide', 'officer'] },
  {
    label: 'Weather',
    href: '#/weather',
    route: '/weather',
    portals: ['tourist', 'guide', 'officer'],
  },
  {
    label: 'SOS assistance',
    href: '#/sos',
    route: '/sos',
    portals: ['tourist', 'guide', 'officer'],
  },
  { label: 'Certificates', href: '#/certificate', route: '/certificate', portals: ['tourist'] },
  {
    label: 'Booking approvals',
    href: '#/admin/bookings',
    route: '/admin/bookings',
    portals: ['officer'],
  },
  { label: 'Analytics', href: '#/analytics', route: '/analytics', portals: ['officer'] },
]

export function DashboardLayout({ content, currentPath, title, role = 'Tourist portal' }) {
  const current = dashboardItems.find((item) => item.route === currentPath)
  const user = getCurrentUser()
  const portal =
    role === 'Tourism office' ? 'officer' : role === 'Guide portal' ? 'guide' : 'tourist'
  const visibleItems = dashboardItems.filter((item) => item.portals.includes(portal))

  return `
    <div class="dashboard-layout">
      <header class="dashboard-header"><a class="dashboard-header__brand" href="#/">TrailSync</a><span>${user?.name ?? role}</span><a href="#/login">Switch role</a><button class="dashboard-header__signout" type="button" data-sign-out>Sign out</button></header>
      <div class="dashboard-layout__body">
        ${Sidebar({ title: role, items: visibleItems.map((item) => ({ ...item, active: item.route === currentPath })) })}
        <div class="dashboard-layout__main">
          ${Breadcrumb({ items: [{ label: 'TrailSync', href: '#/' }, { label: current?.label ?? title }] })}
          ${content}
        </div>
      </div>
    </div>
  `
}
