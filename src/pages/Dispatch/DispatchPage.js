import { Button, Card, StatusBadge } from '../../components/index.js'
import { dispatchGuides, pendingDispatchBooking } from '../../data/dispatchData.js'
import { getDispatchState } from '../../services/dispatchService.js'

function BookingCard() {
  const booking = pendingDispatchBooking
  return Card({
    eyebrow: `Booking ${booking.id}`,
    title: booking.trail,
    content: `<dl class="dispatch-booking__details"><div><dt>Guest</dt><dd>${booking.guestName}</dd></div><div><dt>Schedule</dt><dd>${booking.schedule}</dd></div><div><dt>Group</dt><dd>${booking.groupSize} trekkers</dd></div><div><dt>Package</dt><dd>${booking.package}</dd></div></dl>`,
    footer: StatusBadge({ label: 'Awaiting guide assignment', tone: 'warning' }),
  })
}

function GuideCard({ guide, selected }) {
  const isAvailable = guide.availability === 'Available'
  return `<article class="dispatch-guide ${selected ? 'is-selected' : ''} ${!isAvailable ? 'is-unavailable' : ''}"><div class="dispatch-guide__avatar" aria-hidden="true">${guide.initials}</div><div class="dispatch-guide__copy"><div><h3>${guide.name}</h3>${StatusBadge({ label: guide.availability, tone: isAvailable ? 'success' : 'neutral' })}</div><p>${guide.experience} experience · ${guide.specialty}</p><span>★ ${guide.rating} rating · ${guide.status}</span></div>${isAvailable ? Button({ label: selected ? 'Selected' : 'Select guide', variant: selected ? 'primary' : 'secondary', size: 'sm', attributes: `data-dispatch-select="${guide.id}"` }) : ''}</article>`
}

function AssignmentComplete(guide) {
  return `<section class="dispatch-complete"><span class="dispatch-complete__icon" aria-hidden="true">✓</span><p class="eyebrow">Assignment complete</p><h2>${guide.name} is ready to lead.</h2><p>${guide.name} has been assigned to ${pendingDispatchBooking.guestName}’s ${pendingDispatchBooking.trail} trek on ${pendingDispatchBooking.schedule}.</p><div>${StatusBadge({ label: 'Guide notified', tone: 'success' })}${StatusBadge({ label: 'Tourist notified', tone: 'success' })}</div>${Button({ label: 'Assign another booking', variant: 'secondary', attributes: 'data-dispatch-action="restart"' })}</section>`
}

export function DispatchPage() {
  const state = getDispatchState()
  const selectedGuide = dispatchGuides.find((guide) => guide.id === state.selectedGuideId)

  return `
    <main class="page-content dispatch-page">
      <div class="dispatch-page__heading"><p class="eyebrow">Guide operations</p><h1>Assign the right guide.</h1><p class="page-content__intro">TrailSync checks availability first, then helps the tourism team make a confident assignment.</p></div>
      <div class="dispatch-flow" aria-label="Guide dispatch progress"><span class="is-complete">1. Booking received</span><span class="${state.stage !== 'pending' ? 'is-complete' : 'is-current'}">2. Check availability</span><span class="${selectedGuide ? 'is-complete' : state.stage === 'available' ? 'is-current' : ''}">3. Select guide</span><span class="${state.stage === 'complete' ? 'is-complete' : ''}">4. Assignment complete</span></div>
      ${state.stage === 'complete' ? AssignmentComplete(selectedGuide) : `<div class="dispatch-layout"><div>${BookingCard()}</div><section class="dispatch-assignment"><div class="dispatch-assignment__heading"><div><p class="eyebrow">${state.stage === 'pending' ? 'Start assignment' : 'Available guides'}</p><h2>${state.stage === 'pending' ? 'Ready to find a guide?' : 'Choose a guide for this trek.'}</h2></div>${state.stage === 'available' ? StatusBadge({ label: `${dispatchGuides.filter((guide) => guide.availability === 'Available').length} guides available`, tone: 'success' }) : ''}</div>${state.stage === 'pending' ? `<p class="dispatch-assignment__empty">We’ll compare the trail schedule with guide availability and show the best available options.</p>${Button({ label: 'Check available guides', attributes: 'data-dispatch-action="check"' })}` : `<div class="dispatch-guides">${dispatchGuides.map((guide) => GuideCard({ guide, selected: guide.id === state.selectedGuideId })).join('')}</div><footer class="dispatch-assignment__footer">${selectedGuide ? `<div><span>Selected guide</span><strong>${selectedGuide.name}</strong></div>${Button({ label: 'Complete assignment', attributes: 'data-dispatch-action="complete"' })}` : '<span>Select an available guide to continue.</span>'}</footer>`}</section></div>`}
    </main>
  `
}
