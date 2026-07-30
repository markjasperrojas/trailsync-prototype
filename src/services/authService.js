import { demoAccounts } from '../data/demoAccounts.js'

const sessionKey = 'trailsync-demo-user'

export function signInAs(role) {
  const account = demoAccounts[role]
  if (!account) return null

  localStorage.setItem(sessionKey, JSON.stringify(account))
  return account
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(sessionKey))
  } catch {
    return null
  }
}

export function signOut() {
  localStorage.removeItem(sessionKey)
}
