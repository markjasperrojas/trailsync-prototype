import { Breadcrumb, Sidebar } from '../components/index.js'
import { getCurrentUser } from '../services/authService.js'

const dashboardItems = [
  { label: 'Book a trek', href: '#/booking', route: '/booking' },
  { label: 'Guide dispatch', href: '#/dispatch', route: '/dispatch' },
  { label: 'Live tracking', href: '#/tracking', route: '/tracking' },
  { label: 'Weather', href: '#/weather', route: '/weather' },
  { label: 'SOS assistance', href: '#/sos', route: '/sos' },
  { label: 'Certificates', href: '#/certificate', route: '/certificate' },
  { label: 'Analytics', href: '#/analytics', route: '/analytics' },
]

export function DashboardLayout({ content, currentPath, title, role = 'Tourist portal' }) {
  const current = dashboardItems.find((item) => item.route === currentPath)
  const user = getCurrentUser()

  return `
    <div class="dashboard-layout">
      <header class="dashboard-header"><a class="dashboard-header__brand" href="#/">TrailSync</a><span>${user?.name ?? role}</span><a href="#/login">Switch role</a><button class="dashboard-header__signout" type="button" data-sign-out>Sign out</button></header>
      <div class="dashboard-layout__body">
        ${Sidebar({ title: role, items: dashboardItems.map((item) => ({ ...item, active: item.route === currentPath })) })}
        <div class="dashboard-layout__main">
          ${Breadcrumb({ items: [{ label: 'TrailSync', href: '#/' }, { label: current?.label ?? title }] })}
          ${content}
        </div>
      </div>
    </div>
  `
}
