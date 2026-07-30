export function Toast({ title, message, tone = 'success' }) {
  return `<section class="toast toast--${tone}" role="status"><div><strong>${title}</strong><p>${message}</p></div><button class="icon-button" type="button" aria-label="Dismiss notification">×</button></section>`
}
