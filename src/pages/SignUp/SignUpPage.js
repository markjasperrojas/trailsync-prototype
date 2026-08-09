import { Button, Input, StatusBadge } from '../../components/index.js'
import { getRegistrationState } from '../../services/authService.js'

export function SignUpPage() {
  const state = getRegistrationState()
  if (state.status === 'success') {
    return `<main class="page-content account-access-page"><section class="account-access-page__panel"><p class="eyebrow">Account created</p><h1>Welcome to TrailSync.</h1><p class="page-content__intro">${state.message}</p>${StatusBadge({ label: 'Tourist account active', tone: 'success' })}<div class="account-access-page__actions">${Button({ label: 'Go to my dashboard', attributes: 'data-auth-action="open-tourist-dashboard"' })}</div></section></main>`
  }

  const feedback =
    state.status === 'error'
      ? `<div class="account-access-page__feedback">${StatusBadge({ label: 'Check your details', tone: 'danger' })}<p>${state.message}</p></div>`
      : ''
  return `<main class="page-content account-access-page"><section class="account-access-page__panel"><p class="eyebrow">Create an account</p><h1>Start your next trek.</h1><p class="page-content__intro">Create a Tourist account to plan your trek and manage your booking requests.</p>${feedback}<form id="tourist-signup-form" class="account-access-page__form">${Input({ id: 'signup-name', name: 'name', label: 'Full name', placeholder: 'Your full name', required: true })}${Input({ id: 'signup-email', name: 'email', label: 'Email address', type: 'email', placeholder: 'name@example.com', required: true })}${Input({ id: 'signup-password', name: 'password', label: 'Password', type: 'password', placeholder: 'At least 8 characters', required: true })}${Input({ id: 'signup-confirm-password', name: 'confirmPassword', label: 'Confirm password', type: 'password', placeholder: 'Re-enter your password', required: true })}<label class="remember-choice"><input id="signup-remember-me" type="checkbox" checked /> <span>Remember me on this device</span></label>${Button({ label: 'Create Tourist account', type: 'submit' })}</form><p class="account-access-page__note">Guide and Tourism Officer accounts are issued through the Tourism Office.</p><p class="account-access-page__link">Already have an account? <a href="#/login">Return to sign in</a></p></section></main>`
}
