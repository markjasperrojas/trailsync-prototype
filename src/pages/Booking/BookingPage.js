import { Button, ProgressBar, StatusBadge } from '../../components/index.js'
import { bookingSteps, guides, packages, schedules, trails } from '../../data/bookingData.js'
import { getBookingState } from '../../services/bookingService.js'

const formatCurrency = (amount) => new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(amount)
const getById = (items, id) => items.find((item) => item.id === id)

function Choice({ field, value, selected, title, detail, meta = '' }) {
  return `<button class="booking-choice ${selected ? 'is-selected' : ''}" type="button" data-booking-select data-field="${field}" data-value="${value}" aria-pressed="${selected}"><span class="booking-choice__check" aria-hidden="true">✓</span><span class="booking-choice__copy"><strong>${title}</strong><span>${detail}</span></span>${meta ? `<span class="booking-choice__meta">${meta}</span>` : ''}</button>`
}

function StepContent(state) {
  if (state.step === 0) return `<div class="booking-options booking-options--cards">${trails.map((trail) => Choice({ field: 'trailId', value: trail.id, selected: state.trailId === trail.id, title: trail.name, detail: `${trail.location} · ${trail.duration}<br>${trail.description}`, meta: `From ${formatCurrency(trail.price)}` })).join('')}</div>`
  if (state.step === 1) return `<div class="booking-options">${schedules.map((schedule) => Choice({ field: 'scheduleId', value: schedule.id, selected: state.scheduleId === schedule.id, title: schedule.date, detail: schedule.day, meta: `${schedule.availability} slots left` })).join('')}</div>`
  if (state.step === 2) return `<div class="booking-options">${packages.map((item) => Choice({ field: 'packageId', value: item.id, selected: state.packageId === item.id, title: item.name, detail: item.description, meta: item.price ? `+${formatCurrency(item.price)}` : 'Included' })).join('')}</div>`
  if (state.step === 3) return `<div class="booking-options booking-options--guides">${guides.map((guide) => Choice({ field: 'guideId', value: guide.id, selected: state.guideId === guide.id, title: guide.name, detail: `${guide.experience} · ${guide.specialty}<br>★ ${guide.rating} rating`, meta: guide.availability })).join('')}</div>`
  return BookingReview(state)
}

function BookingReview(state) {
  const trail = getById(trails, state.trailId)
  const schedule = getById(schedules, state.scheduleId)
  const packageOption = getById(packages, state.packageId)
  const guide = getById(guides, state.guideId)
  const total = trail.price + packageOption.price

  return `<div class="booking-review"><div class="booking-review__item"><span>Trail</span><strong>${trail.name}</strong><small>${trail.location}</small></div><div class="booking-review__item"><span>Schedule</span><strong>${schedule.date}</strong><small>${schedule.day}</small></div><div class="booking-review__item"><span>Package</span><strong>${packageOption.name}</strong><small>${packageOption.price ? `+${formatCurrency(packageOption.price)}` : 'Included'}</small></div><div class="booking-review__item"><span>Your guide</span><strong>${guide.name}</strong><small>${guide.experience}</small></div><div class="booking-review__total"><span>Estimated total</span><strong>${formatCurrency(total)}</strong></div></div>`
}

function BookingSuccess(state) {
  const trail = getById(trails, state.trailId)
  const schedule = getById(schedules, state.scheduleId)
  return `<main class="page-content booking-success"><span class="booking-success__icon" aria-hidden="true">✓</span><p class="eyebrow">Booking confirmed</p><h1>You’re on the trail list.</h1><p class="page-content__intro">Your ${trail.name} trek on ${schedule.date} has been saved. We’ll keep your itinerary and guide details ready in TrailSync.</p><div class="booking-success__actions">${Button({ label: 'Plan another trek', variant: 'secondary', attributes: 'data-booking-action="restart"' })}${Button({ label: 'Go to my dashboard', attributes: 'onclick="location.hash=\'#/tourist\'"' })}</div></main>`
}

export function BookingPage() {
  const state = getBookingState()
  if (state.confirmed) return BookingSuccess(state)

  const currentStep = bookingSteps[state.step]
  const progress = Math.round(((state.step + 1) / bookingSteps.length) * 100)
  const nextDisabled = state.step < bookingSteps.length - 1 && ![state.trailId, state.scheduleId, state.packageId, state.guideId][state.step]

  return `
    <main class="page-content booking-page">
      <div class="booking-page__heading"><p class="eyebrow">Tourist booking</p><h1>Plan your trek.</h1><p class="page-content__intro">A few details are all it takes to reserve a trail experience.</p></div>
      <div class="booking-stepper" aria-label="Booking progress"><div class="booking-stepper__steps">${bookingSteps.map((step, index) => `<span class="${index === state.step ? 'is-current' : index < state.step ? 'is-complete' : ''}"><b>${index < state.step ? '✓' : index + 1}</b>${step}</span>`).join('')}</div>${ProgressBar({ value: progress, label: `Step ${state.step + 1} of ${bookingSteps.length}` })}</div>
      <section class="booking-panel" aria-labelledby="booking-step-title"><div class="booking-panel__heading"><div><p class="eyebrow">Step ${state.step + 1}</p><h2 id="booking-step-title">Choose your ${currentStep.toLowerCase()}.</h2></div>${state.step === 0 ? StatusBadge({ label: 'Secure booking', tone: 'success' }) : ''}</div>${StepContent(state)}<footer class="booking-panel__footer">${state.step ? Button({ label: 'Back', variant: 'ghost', attributes: 'data-booking-action="back"' }) : '<span></span>'}${state.step === bookingSteps.length - 1 ? Button({ label: 'Confirm booking', attributes: 'data-booking-action="confirm"' }) : Button({ label: 'Continue', attributes: `data-booking-action="next" ${nextDisabled ? 'disabled aria-disabled="true"' : ''}` })}</footer></section>
    </main>
  `
}
