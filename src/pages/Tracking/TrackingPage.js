import { Button, ProgressBar, StatusBadge } from '../../components/index.js'
import { trekDetails, trekRoute } from '../../data/trackingData.js'
import { getTrackingState } from '../../services/trackingService.js'

export function TrackingPage() {
  const { routeIndex, isSimulating } = getTrackingState()
  const location = trekRoute[routeIndex]
  const progress = Math.round((routeIndex / (trekRoute.length - 1)) * 100)
  const completed = routeIndex === trekRoute.length - 1

  return `
    <main class="page-content tracking-page">
      <div class="tracking-page__heading"><div><p class="eyebrow">Live trek monitoring</p><h1>Every step, in view.</h1><p class="page-content__intro">Follow ${trekDetails.tourist} and guide ${trekDetails.guide} as they make their way up ${trekDetails.trail}.</p></div>${StatusBadge({ label: completed ? 'Trek complete' : isSimulating ? 'GPS simulation active' : 'GPS ready', tone: completed ? 'success' : isSimulating ? 'info' : 'neutral' })}</div>
      <section class="tracking-map-panel"><div id="tracking-map" class="tracking-map" aria-label="Interactive map of the Mount Pulag trek route"></div><div class="tracking-map-panel__legend"><span><i class="legend-dot legend-dot--tourist"></i>Tourist</span><span><i class="legend-dot legend-dot--guide"></i>Guide</span><span><i class="legend-dot legend-dot--summit"></i>Summit</span></div></section>
      <div class="tracking-stats"><article><span>Trail progress</span><strong>${progress}%</strong><small>${location.label}</small></article><article><span>Distance covered</span><strong>${location.distance}</strong><small>of 4.8 km route</small></article><article><span>Estimated arrival</span><strong>${location.eta}</strong><small>${completed ? 'At the summit' : 'to Mount Pulag summit'}</small></article></div>
      <section class="tracking-progress"><div><p class="eyebrow">Trek progress</p><h2>${location.label}</h2></div>${ProgressBar({ value: progress, label: `${location.distance} completed` })}<div class="tracking-progress__actions">${completed ? `${Button({ label: 'Restart simulation', variant: 'secondary', attributes: 'data-tracking-action="reset"' })}` : `${Button({ label: isSimulating ? 'Pause simulation' : 'Start GPS simulation', attributes: `data-tracking-action="${isSimulating ? 'pause' : 'start'}"` })}${Button({ label: 'Move one checkpoint', variant: 'secondary', attributes: 'data-tracking-action="advance"' })}`}</div></section>
      <section class="tracking-timeline" aria-labelledby="timeline-title"><div><p class="eyebrow">Progress timeline</p><h2 id="timeline-title">Today’s journey</h2></div><ol>${trekRoute.map((point, index) => `<li class="${index < routeIndex ? 'is-complete' : index === routeIndex ? 'is-current' : ''}"><span class="tracking-timeline__marker" aria-hidden="true">${index < routeIndex ? '✓' : index + 1}</span><div><strong>${point.label}</strong><small>${point.time} · ${point.distance}</small></div>${index === routeIndex ? StatusBadge({ label: completed ? 'Arrived' : 'Current location', tone: completed ? 'success' : 'info' }) : ''}</li>`).join('')}</ol></section>
    </main>
  `
}
