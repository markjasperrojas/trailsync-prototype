export function LoadingSpinner({ label = 'Loading' }) {
  return `<span class="loading-spinner" role="status"><span class="loading-spinner__ring" aria-hidden="true"></span><span>${label}</span></span>`
}
