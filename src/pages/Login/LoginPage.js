import { Button, Input, StatusBadge } from '../../components/index.js'
import { demoAccounts } from '../../data/demoAccounts.js'
import { getCurrentUser } from '../../services/authService.js'

function AccountOption(account) {
  return `
    <article class="account-option">
      <div class="account-option__avatar" aria-hidden="true">${account.name.split(' ').map((name) => name[0]).join('')}</div>
      <div><h3>${account.roleLabel}</h3><p>${account.name}</p><span>${account.email}</span></div>
      ${Button({ label: `Continue as ${account.roleLabel}`, variant: 'secondary', size: 'sm', attributes: `data-demo-role="${account.role}"` })}
    </article>
  `
}

export function LoginPage() {
  const user = getCurrentUser()

  return `
    <main class="login-page page-content">
      <section class="login-page__panel" aria-labelledby="login-title">
        <div class="login-page__intro">
          <p class="eyebrow">TrailSync demo access</p>
          <h1 id="login-title">Choose your path.</h1>
          <p>Explore the prototype as a tourist, guide, or tourism officer. No password or backend is required.</p>
          ${user ? `<div class="login-page__session">${StatusBadge({ label: `Signed in as ${user.name}`, tone: 'success' })}<a href="#/${user.role === 'officer' ? 'admin' : user.role}" data-return-session>Return to dashboard →</a></div>` : ''}
        </div>
        <div class="login-page__form" aria-label="Demo sign in form">
          ${Input({ id: 'demo-email', label: 'Email address', type: 'email', placeholder: 'Choose a demo account below', hint: 'Demo accounts sign in with one click.' })}
          ${Input({ id: 'demo-password', label: 'Password', type: 'password', placeholder: 'Not required for this prototype' })}
          ${Button({ label: 'Sign in with demo account', attributes: 'disabled aria-disabled="true"' })}
        </div>
      </section>
      <section class="login-page__accounts" aria-labelledby="accounts-title">
        <div><p class="eyebrow">Demo accounts</p><h2 id="accounts-title">Select a role to continue.</h2></div>
        <div class="account-options">${Object.values(demoAccounts).map(AccountOption).join('')}</div>
      </section>
    </main>
  `
}
