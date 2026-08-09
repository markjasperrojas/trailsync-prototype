import { Button } from '../components/index.js'
import { getCurrentUser } from '../services/authService.js'

export function AccessDeniedPage({ requiresSignIn = false } = {}) {
  const user = getCurrentUser()
  const title = requiresSignIn
    ? 'Sign in to plan your trek.'
    : 'This page is not available for your role.'
  const description = requiresSignIn
    ? 'Trail browsing is open to everyone. Sign in as a Tourist to choose a schedule, package, and guide for your booking.'
    : 'Use the navigation menu to continue with the tools assigned to your TrailSync account.'
  const action = requiresSignIn
    ? Button({ label: 'Sign in as Tourist', attributes: 'onclick="location.hash=\'#/login\'"' })
    : Button({
        label: 'Return to dashboard',
        attributes: `onclick="location.hash='#/${user?.role === 'officer' ? 'admin' : (user?.role ?? '')}'"`,
      })

  return `
    <main class="page-content access-denied-page">
      <p class="eyebrow">Restricted area</p>
      <h1>${title}</h1>
      <p class="page-content__intro">${description}</p>
      ${action}
    </main>
  `
}
