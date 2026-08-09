import { Card, StatusBadge } from '../../components/index.js'
import { getCurrentUser } from '../../services/authService.js'
import { getGuideSchedule } from '../../services/approvalService.js'

function ScheduleCard({ request }) {
  return Card({
    eyebrow: `${request.id} · ${request.schedule}`,
    title: request.trail,
    content: `<p><strong>${request.hiker}</strong> · ${request.groupSize} trekkers<br>${request.packageName}</p>`,
    footer: `<div class="guide-schedule__footer"><span>Confirmed with ${request.hiker}</span>${StatusBadge({ label: 'Confirmed', tone: 'success' })}</div>`,
  })
}

export function GuideSchedulePage() {
  const user = getCurrentUser()
  const schedule = getGuideSchedule(user?.guideId)

  return `<main class="page-content guide-schedule-page"><div class="guide-schedule-page__heading"><div><p class="eyebrow">Guide workspace</p><h1>My schedule.</h1><p class="page-content__intro">Your confirmed treks are listed here. Assignment requests stay in My Assignments until you accept them.</p></div>${StatusBadge({ label: `${schedule.length} confirmed trek${schedule.length === 1 ? '' : 's'}`, tone: schedule.length ? 'success' : 'neutral' })}</div><section class="guide-schedule__summary"><div><p class="eyebrow">Upcoming commitments</p><strong>${schedule.length}</strong><span>confirmed trek${schedule.length === 1 ? '' : 's'}</span></div><p>Need to change availability? Update it in My Assignments so the Tourism Office can plan future dispatches.</p></section><section class="guide-schedule__list"><div><p class="eyebrow">Confirmed itinerary</p><h2>Upcoming treks</h2></div>${schedule.length ? schedule.map((request) => ScheduleCard({ request })).join('') : '<div class="guide-empty">You have no confirmed treks yet. Accept an assignment to add it to your schedule.</div>'}</section></main>`
}
