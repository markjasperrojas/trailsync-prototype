import { trekRoute } from '../data/trackingData.js'

const initialState = () => ({ routeIndex: 0, isSimulating: false })
let trackingState = initialState()

export function getTrackingState() {
  return trackingState
}

export function startTrackingSimulation() {
  trackingState = { ...trackingState, isSimulating: true }
}

export function pauseTrackingSimulation() {
  trackingState = { ...trackingState, isSimulating: false }
}

export function advanceTrekker() {
  const nextIndex = Math.min(trackingState.routeIndex + 1, trekRoute.length - 1)
  const reachedEnd = nextIndex === trekRoute.length - 1
  trackingState = { routeIndex: nextIndex, isSimulating: !reachedEnd }
  return !reachedEnd
}

export function resetTrackingSimulation() {
  trackingState = initialState()
}
