import { Card, StatusBadge } from '../../components/index.js'
import { analyticsMetrics } from '../../data/analyticsData.js'
const chart = (id, title, note) =>
  Card({
    title,
    content: `<canvas id="${id}" aria-label="${title} chart"></canvas>`,
    footer: `<span class="analytics-note">${note}</span>`,
  })
export function AnalyticsPage() {
  return `<main class="page-content analytics-page"><div class="analytics-page__heading"><div><p class="eyebrow">Tourism office</p><h1>See the whole trail.</h1><p class="page-content__intro">A concise operational view of tourism activity, capacity, and safety.</p></div>${StatusBadge({ label: 'Updated today', tone: 'success' })}</div><section class="analytics-metrics">${analyticsMetrics.map((m) => `<article><span>${m.label}</span><strong>${m.value}</strong><small>${m.change}</small></article>`).join('')}</section><section class="analytics-grid analytics-grid--two">${chart('visitor-chart', 'Visitor trends', 'Monthly visitors')}${chart('revenue-chart', 'Revenue', 'Thousands of pesos')}</section><section class="analytics-grid analytics-grid--two">${chart('trail-chart', 'Popular trails', 'Bookings by trail')}${chart('workload-chart', 'Guide workload', 'Current month assignments')}</section><section class="analytics-grid analytics-grid--two">${chart('delay-chart', 'Weather delays', 'Delayed departures')}${chart('incident-chart', 'Safety incidents', 'Reported incidents')}</section></main>`
}
