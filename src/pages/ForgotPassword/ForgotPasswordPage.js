import { Button, Input, StatusBadge } from '../../components/index.js'
import { getPasswordResetState } from '../../services/authService.js'

export function ForgotPasswordPage() {
  const state = getPasswordResetState()
  const feedback =
    state.status === 'idle'
      ? ''
      : `<div class="account-access-page__feedback">${StatusBadge({ label: state.status === 'success' ? 'Request received' : 'Check your details', tone: state.status === 'success' ? 'success' : 'danger' })}<p>${state.message}</p></div>`

  return `<main class="page-content account-access-page"><section class="account-access-page__panel"><p class="eyebrow">Account recovery</p><h1>Reset your password.</h1><p class="page-content__intro">Enter your email address and we’ll help you regain access to your TrailSync account.</p>${feedback}<form id="password-reset-form" class="account-access-page__form">${Input({ id: 'recovery-email', name: 'email', label: 'Email address', type: 'email', placeholder: 'name@example.com', required: true })}${Button({ label: 'Send reset instructions', type: 'submit' })}</form><p class="account-access-page__link">Remembered your password? <a href="#/login">Return to sign in</a></p></section></main>`
}
