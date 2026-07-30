import { bookingSteps } from '../data/bookingData.js'

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
  bookingState = { ...bookingState, confirmed: true }
}

export function resetBooking() {
  bookingState = createInitialState()
}
