import { routes } from './router/routes.js'
import { AdminLayout } from './layouts/AdminLayout.js'
import { GuideLayout } from './layouts/GuideLayout.js'
import { PublicLayout } from './layouts/PublicLayout.js'
import { TouristLayout } from './layouts/TouristLayout.js'
import { AccessDeniedPage } from './pages/AccessDeniedPage.js'
import { getCurrentUser } from './services/authService.js'

const roleLayouts = {
  tourist: TouristLayout,
  guide: GuideLayout,
  officer: AdminLayout,
}

export function App(currentPath) {
  const route = routes[currentPath] ?? routes['/']
  const user = getCurrentUser()
  const isPublic = !route.allowedRoles
  const canAccess = isPublic || !user || route.allowedRoles.includes(user.role)
  const content = canAccess ? route.page() : AccessDeniedPage()
  const layout = isPublic || !user ? PublicLayout : roleLayouts[user.role]
  document.title = `${route.title} | TrailSync`

  return layout({ content, currentPath, title: route.title })
}
