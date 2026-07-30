import { dispatchGuides } from '../data/dispatchData.js'

const initialState = () => ({ stage: 'pending', selectedGuideId: '' })
let dispatchState = initialState()

export function getDispatchState() {
  return dispatchState
}

export function checkAvailableGuides() {
  dispatchState = { ...dispatchState, stage: 'available' }
}

export function selectDispatchGuide(guideId) {
  const guide = dispatchGuides.find(
    (item) => item.id === guideId && item.availability === 'Available',
  )
  if (guide) dispatchState = { ...dispatchState, selectedGuideId: guideId }
}

export function completeDispatchAssignment() {
  if (dispatchState.selectedGuideId) dispatchState = { ...dispatchState, stage: 'complete' }
}

export function resetDispatch() {
  dispatchState = initialState()
}
