import { bookingSteps, packages, schedules, trails } from '../data/bookingData.js'
import { createBookingRequest } from './approvalService.js'

const createInitialState = () => ({
  step: 0,
  trailId: '',
  scheduleId: '',
  packageId: '',
  guideId: '',
  confirmed: false,
})

let bookingState = createInitialState()

export function getBookingState() {
  return bookingState
}

export function selectBookingOption(field, value) {
  bookingState = { ...bookingState, [field]: value }
}

export function changeBookingStep(direction) {
  bookingState = {
    ...bookingState,
    step: Math.min(Math.max(bookingState.step + direction, 0), bookingSteps.length - 1),
  }
}

export function canAdvanceBooking() {
  return Boolean(
    [bookingState.trailId, bookingState.scheduleId, bookingState.packageId, bookingState.guideId][
      bookingState.step
    ],
  )
}

export function confirmBooking() {
  const trail = trails.find((item) => item.id === bookingState.trailId)
  const schedule = schedules.find((item) => item.id === bookingState.scheduleId)
  const packageOption = packages.find((item) => item.id === bookingState.packageId)
  const request = createBookingRequest({
    hiker: 'Maria Santos',
    trail: trail.name,
    schedule: schedule.date,
    packageName: packageOption.name,
    groupSize: 1,
  })
  bookingState = { ...bookingState, confirmed: true, requestId: request.id }
}

export function resetBooking() {
  bookingState = createInitialState()
}
