import { demoAccounts } from '../data/demoAccounts.js'

const localUserKey = 'trailsync-user'
const sessionUserKey = 'trailsync-session-user'
const legacyUserKey = 'trailsync-demo-user'
let passwordResetState = { status: 'idle', message: '' }
let registrationState = { status: 'idle', message: '' }

function saveUser(account, remember) {
  localStorage.removeItem(localUserKey)
  sessionStorage.removeItem(sessionUserKey)
  const storage = remember ? localStorage : sessionStorage
  storage.setItem(remember ? localUserKey : sessionUserKey, JSON.stringify(account))
}

export function signInAs(role, remember = true) {
  const account = demoAccounts[role]
  if (!account) return null

  saveUser(account, remember)
  return account
}

export function getCurrentUser() {
  try {
    const storedUser =
      localStorage.getItem(localUserKey) ??
      sessionStorage.getItem(sessionUserKey) ??
      localStorage.getItem(legacyUserKey)
    return storedUser ? JSON.parse(storedUser) : null
  } catch {
    return null
  }
}

export function signOut() {
  localStorage.removeItem(localUserKey)
  localStorage.removeItem(legacyUserKey)
  sessionStorage.removeItem(sessionUserKey)
}

export function requestPasswordReset(email) {
  const normalizedEmail = email?.trim().toLowerCase() ?? ''
  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
    passwordResetState = { status: 'error', message: 'Enter a valid email address to continue.' }
    return false
  }

  passwordResetState = {
    status: 'success',
    message: 'If an account matches that email address, reset instructions have been sent.',
  }
  return true
}

export const getPasswordResetState = () => passwordResetState

export function registerTourist(values, remember = true) {
  const name = values.name?.trim() ?? ''
  const email = values.email?.trim().toLowerCase() ?? ''
  const password = values.password ?? ''
  const confirmPassword = values.confirmPassword ?? ''

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || password.length < 8) {
    registrationState = {
      status: 'error',
      message: 'Enter your name, a valid email address, and a password with at least 8 characters.',
    }
    return false
  }
  if (password !== confirmPassword) {
    registrationState = { status: 'error', message: 'Your password confirmation does not match.' }
    return false
  }

  const account = {
    id: `tourist-${Date.now()}`,
    role: 'tourist',
    roleLabel: 'Tourist',
    name,
    email,
    dashboardPath: '/tourist',
  }
  saveUser(account, remember)
  registrationState = {
    status: 'success',
    message: 'Your Tourist account is ready. You can now plan a trek.',
  }
  return true
}

export const getRegistrationState = () => registrationState
