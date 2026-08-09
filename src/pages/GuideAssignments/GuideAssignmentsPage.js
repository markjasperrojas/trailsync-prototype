import { Button, Card, StatusBadge } from '../../components/index.js'
import { getCurrentUser } from '../../services/authService.js'
import { getGuideAssignments } from '../../services/approvalService.js'
import { getGuideProfile } from '../../services/guideService.js'

function AssignmentCard({ request }) {
  const awaitingResponse = request.status === 'pending-guide-response'
  return Card({
    eyebrow: `${request.id} · ${request.schedule}`,
    title: request.trail,
    content: `<p><strong>${request.hiker}</strong> · ${request.groupSize} trekkers<br>${request.packageName}</p>`,
    footer: `<div class="guide-assignment__footer">${StatusBadge({ label: awaitingResponse ? 'Awaiting your response' : 'Assignment accepted', tone: awaitingResponse ? 'warning' : 'success' })}${awaitingResponse ? `<div>${Button({ label: 'Decline', variant: 'ghost', size: 'sm', attributes: `data-guide-action="decline" data-assignment-id="${request.id}"` })}${Button({ label: 'Accept assignment', size: 'sm', attributes: `data-guide-action="accept" data-assignment-id="${request.id}"` })}</div>` : ''}</div>`,
  })
}

export function GuideAssignmentsPage() {
  const user = getCurrentUser()
  const guide = getGuideProfile(user?.guideId)
  const assignments = getGuideAssignments(user?.guideId)
  const pending = assignments.filter((item) => item.status === 'pending-guide-response')

  return `<main class="page-content guide-assignments-page"><div class="guide-assignments-page__heading"><div><p class="eyebrow">Guide workspace</p><h1>My assignments.</h1><p class="page-content__intro">Set your availability and respond to trek assignments from the Tourism Office.</p></div>${StatusBadge({ label: `${pending.length} awaiting response`, tone: pending.length ? 'warning' : 'success' })}</div><section class="guide-availability"><div><p class="eyebrow">My availability</p><h2>${guide.availability}</h2><p>${guide.status}</p></div><div>${StatusBadge({ label: guide.availability, tone: guide.availability === 'Available' ? 'success' : 'neutral' })}${Button({ label: guide.availability === 'Available' ? 'Set unavailable' : 'Set available', variant: 'secondary', attributes: 'data-guide-action="toggle-availability"' })}</div></section><section class="guide-assignment-list"><div><p class="eyebrow">Assignment requests</p><h2>Upcoming treks</h2></div>${assignments.length ? assignments.map((request) => AssignmentCard({ request })).join('') : '<div class="guide-empty">No assignments are waiting for you. Set your availability to receive new requests.</div>'}</section></main>`
}
