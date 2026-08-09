import { Button, Card, StatusBadge } from '../../components/index.js'
import { trails } from '../../data/bookingData.js'

const trailStyles = {
  pulag: { tone: 'warning', className: 'trail-card--pulag' },
  ulap: { tone: 'success', className: 'trail-card--ulap' },
  pinatubo: { tone: 'warning', className: 'trail-card--pinatubo' },
}

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(amount)

function TrailCard(trail) {
  const style = trailStyles[trail.id]
  return Card({
    className: `trail-card trail-explorer-card ${style.className}`,
    eyebrow: trail.location,
    title: trail.name,
    content: `<p>${trail.description}</p><dl class="trail-explorer-card__details"><div><dt>Difficulty</dt><dd>${trail.difficulty}</dd></div><div><dt>Duration</dt><dd>${trail.duration}</dd></div><div><dt>Starting from</dt><dd>${formatCurrency(trail.price)}</dd></div></dl>`,
    footer: `<div class="trail-explorer-card__footer">${StatusBadge({ label: trail.difficulty, tone: style.tone })}${Button({ label: 'Sign in to book', variant: 'secondary', size: 'sm', attributes: 'onclick="location.hash=\'#/login\'"' })}</div>`,
  })
}

export function TrailsPage() {
  return `<main class="page-content trails-page"><section class="trails-page__heading"><p class="eyebrow">Brgy. Cabintan</p><h1>Find your next trail.</h1><p class="page-content__intro">Explore locally guided treks, compare their difficulty, and choose the experience that fits your group.</p></section><section class="trails-page__grid" aria-label="Available trails">${trails.map(TrailCard).join('')}</section><section class="trails-page__cta"><div><p class="eyebrow">Ready to go?</p><h2>Sign in to plan your trek.</h2><p>Tourist accounts can select a schedule, package, and preferred guide.</p></div>${Button({ label: 'Sign in to continue', attributes: 'onclick="location.hash=\'#/login\'"' })}</section></main>`
}
