import { Breadcrumb, Sidebar } from '../components/index.js'

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

  return `
    <div class="dashboard-layout">
      <header class="dashboard-header"><a class="dashboard-header__brand" href="#/">TrailSync</a><span>${role}</span><a href="#/login">Switch role</a></header>
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
