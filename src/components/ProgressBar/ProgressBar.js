export function ProgressBar({ value, label = 'Progress' }) {
  const safeValue = Math.max(0, Math.min(100, value))
  return `<div class="progress"><div class="progress__labels"><span>${label}</span><strong>${safeValue}%</strong></div><div class="progress__track" role="progressbar" aria-label="${label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${safeValue}"><span class="progress__value" style="width: ${safeValue}%"></span></div></div>`
}
