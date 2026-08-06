import { dispatchGuides } from '../data/dispatchData.js'
import { assignGuideToBooking, getApprovedRequests } from './approvalService.js'

const initialState = () => ({ stage: 'pending', selectedGuideId: '', bookingId: '' })
let dispatchState = initialState()

export function getDispatchState() {
  return dispatchState
}

export function checkAvailableGuides() {
  const booking = getApprovedRequests()[0]
  dispatchState = { ...dispatchState, stage: 'available', bookingId: booking?.id ?? '' }
}

export function selectDispatchGuide(guideId) {
  const guide = dispatchGuides.find(
    (item) => item.id === guideId && item.availability === 'Available',
  )
  if (guide) dispatchState = { ...dispatchState, selectedGuideId: guideId }
}

export function completeDispatchAssignment() {
  if (dispatchState.selectedGuideId && dispatchState.bookingId) {
    const guide = dispatchGuides.find((item) => item.id === dispatchState.selectedGuideId)
    assignGuideToBooking(dispatchState.bookingId, guide.name)
    dispatchState = { ...dispatchState, stage: 'complete' }
  }
}

export function resetDispatch() {
  dispatchState = initialState()
}
