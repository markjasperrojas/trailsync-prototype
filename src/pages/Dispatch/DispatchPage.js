import { Button, Card, StatusBadge } from '../../components/index.js'
import {
  getApprovedRequests,
  getBookingRequestById,
  getGuideAssignmentSummary,
} from '../../services/approvalService.js'
import { getDispatchState } from '../../services/dispatchService.js'
import { getGuideProfiles } from '../../services/guideService.js'

function BookingCard(booking) {
  return Card({
    eyebrow: `Booking ${booking.id}`,
    title: booking.trail,
    content: `<dl class="dispatch-booking__details"><div><dt>Guest</dt><dd>${booking.hiker}</dd></div><div><dt>Schedule</dt><dd>${booking.schedule}</dd></div><div><dt>Group</dt><dd>${booking.groupSize} trekkers</dd></div><div><dt>Package</dt><dd>${booking.packageName}</dd></div></dl>`,
    footer: StatusBadge({ label: 'Awaiting guide assignment', tone: 'warning' }),
  })
}

function GuideCard({ guide, selected = false, assignmentMode = false }) {
  const isAvailable = guide.availability === 'Available'
  const workload = getGuideAssignmentSummary(guide.id)
  const workloadText = `${workload.confirmed} confirmed · ${workload.awaitingResponse} awaiting response`
  return `<article class="dispatch-guide ${selected ? 'is-selected' : ''} ${!isAvailable ? 'is-unavailable' : ''}"><div class="dispatch-guide__avatar" aria-hidden="true">${guide.initials}</div><div class="dispatch-guide__copy"><div><h3>${guide.name}</h3>${StatusBadge({ label: guide.availability, tone: isAvailable ? 'success' : 'neutral' })}</div><p>${guide.experience} experience · ${guide.specialty}</p><span>★ ${guide.rating} rating · ${guide.status}</span><small>${workloadText}</small></div>${assignmentMode && isAvailable ? Button({ label: selected ? 'Selected' : 'Select guide', variant: selected ? 'primary' : 'secondary', size: 'sm', attributes: `data-dispatch-select="${guide.id}"` }) : ''}</article>`
}

function AssignmentComplete(guide, booking) {
  return `<section class="dispatch-complete"><span class="dispatch-complete__icon" aria-hidden="true">✓</span><p class="eyebrow">Assignment sent</p><h2>${guide.name} can now respond.</h2><p>${guide.name} received ${booking.hiker}’s ${booking.trail} trek for ${booking.schedule}. It will become confirmed only after the guide accepts it.</p><div>${StatusBadge({ label: 'Guide response required', tone: 'warning' })}${StatusBadge({ label: 'Tourism Office updated', tone: 'success' })}</div>${Button({ label: 'Manage another booking', variant: 'secondary', attributes: 'data-dispatch-action="restart"' })}</section>`
}

export function DispatchPage() {
  const state = getDispatchState()
  const guides = getGuideProfiles()
  const selectedGuide = guides.find((guide) => guide.id === state.selectedGuideId)
  const booking = getBookingRequestById(state.bookingId) ?? getApprovedRequests()[0]
  const availableGuides = guides.filter((guide) => guide.availability === 'Available')
  const workload = guides.reduce(
    (total, guide) => {
      const summary = getGuideAssignmentSummary(guide.id)
      return {
        awaitingResponse: total.awaitingResponse + summary.awaitingResponse,
        confirmed: total.confirmed + summary.confirmed,
      }
    },
    { awaitingResponse: 0, confirmed: 0 },
  )

  return `
    <main class="page-content dispatch-page">
      <div class="dispatch-page__heading"><p class="eyebrow">Tourism office</p><h1>Tour guide management.</h1><p class="page-content__intro">View guide availability and workload, then send approved bookings to the right guide.</p></div>
      <section class="guide-management-summary" aria-label="Guide management summary"><span>Total guides <strong>${guides.length}</strong></span><span>Available <strong>${availableGuides.length}</strong></span><span>Awaiting response <strong>${workload.awaitingResponse}</strong></span><span>Confirmed treks <strong>${workload.confirmed}</strong></span></section>
      <section class="guide-management-roster"><div><p class="eyebrow">Guide roster</p><h2>Availability and workload</h2></div><div class="dispatch-guides dispatch-guides--roster">${guides.map((guide) => GuideCard({ guide })).join('')}</div></section>
      <section class="guide-management-assignment"><div><p class="eyebrow">Booking assignment</p><h2>Send an approved booking to a guide</h2></div><div class="dispatch-flow" aria-label="Booking assignment progress"><span class="is-complete">1. Booking approved</span><span class="${state.stage !== 'pending' ? 'is-complete' : 'is-current'}">2. Check availability</span><span class="${selectedGuide ? 'is-complete' : state.stage === 'available' ? 'is-current' : ''}">3. Select guide</span><span class="${state.stage === 'complete' ? 'is-complete' : ''}">4. Send request</span></div>${!booking ? '<div class="guide-empty">There are no approved bookings ready to assign.</div>' : state.stage === 'complete' ? AssignmentComplete(selectedGuide, booking) : `<div class="dispatch-layout"><div>${BookingCard(booking)}</div><section class="dispatch-assignment"><div class="dispatch-assignment__heading"><div><p class="eyebrow">${state.stage === 'pending' ? 'Start assignment' : 'Available guides'}</p><h2>${state.stage === 'pending' ? 'Ready to choose a guide?' : 'Choose a guide for this trek.'}</h2></div>${state.stage === 'available' ? StatusBadge({ label: `${availableGuides.length} guides available`, tone: 'success' }) : ''}</div>${state.stage === 'pending' ? `<p class="dispatch-assignment__empty">This approved booking is ready to be sent to an available guide.</p>${Button({ label: 'Check available guides', attributes: 'data-dispatch-action="check"' })}` : `<div class="dispatch-guides">${guides.map((guide) => GuideCard({ guide, selected: guide.id === state.selectedGuideId, assignmentMode: true })).join('')}</div><footer class="dispatch-assignment__footer">${selectedGuide ? `<div><span>Selected guide</span><strong>${selectedGuide.name}</strong></div>${Button({ label: 'Send assignment request', attributes: 'data-dispatch-action="complete"' })}` : '<span>Select an available guide to continue.</span>'}</footer>`}</section></div>`}</section>
    </main>
  `
}
