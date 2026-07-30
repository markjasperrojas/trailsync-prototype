const tones = new Set(['success', 'warning', 'danger', 'neutral', 'info'])

export function StatusBadge({ label, tone = 'neutral' }) {
  const safeTone = tones.has(tone) ? tone : 'neutral'
  return `<span class="status-badge status-badge--${safeTone}"><span class="status-badge__dot" aria-hidden="true"></span>${label}</span>`
}
