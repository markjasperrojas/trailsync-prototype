import './styles/global.css'
import { App } from './App.js'
import { startRouter } from './router/router.js'
import { signInAs, signOut } from './services/authService.js'
import { canAdvanceBooking, changeBookingStep, confirmBooking, resetBooking, selectBookingOption } from './services/bookingService.js'
import { checkAvailableGuides, completeDispatchAssignment, resetDispatch, selectDispatchGuide } from './services/dispatchService.js'
import { initializeTrackingMap } from './modules/tracking/mapView.js'
import { advanceTrekker, getTrackingState, pauseTrackingSimulation, resetTrackingSimulation, startTrackingSimulation } from './services/trackingService.js'

const appRoot = document.querySelector('#app')
let activePath = '/'
let trackingTimer

function renderActiveView() {
  appRoot.innerHTML = App(activePath)
  if (activePath === '/tracking') initializeTrackingMap(getTrackingState().routeIndex)
}

function stopTrackingTimer() {
  clearInterval(trackingTimer)
  trackingTimer = undefined
}

startRouter((currentPath) => {
  activePath = currentPath
  if (activePath !== '/tracking') stopTrackingTimer()
  renderActiveView()
})

appRoot.addEventListener('click', (event) => {
  const signInButton = event.target.closest('[data-demo-role]')
  if (signInButton) {
    const account = signInAs(signInButton.dataset.demoRole)
    if (account) window.location.hash = `#${account.dashboardPath}`
    return
  }

  if (event.target.closest('[data-sign-out]')) {
    signOut()
    window.location.hash = '#/login'
    return
  }

  const bookingChoice = event.target.closest('[data-booking-select]')
  if (bookingChoice) {
    selectBookingOption(bookingChoice.dataset.field, bookingChoice.dataset.value)
    renderActiveView()
    return
  }

  const bookingAction = event.target.closest('[data-booking-action]')?.dataset.bookingAction
  if (bookingAction === 'back') changeBookingStep(-1)
  if (bookingAction === 'next' && canAdvanceBooking()) changeBookingStep(1)
  if (bookingAction === 'confirm') confirmBooking()
  if (bookingAction === 'restart') resetBooking()
  if (bookingAction) {
    renderActiveView()
    return
  }

  const guideId = event.target.closest('[data-dispatch-select]')?.dataset.dispatchSelect
  if (guideId) {
    selectDispatchGuide(guideId)
    renderActiveView()
    return
  }

  const dispatchAction = event.target.closest('[data-dispatch-action]')?.dataset.dispatchAction
  if (dispatchAction === 'check') checkAvailableGuides()
  if (dispatchAction === 'complete') completeDispatchAssignment()
  if (dispatchAction === 'restart') resetDispatch()
  if (dispatchAction) {
    renderActiveView()
    return
  }

  const trackingAction = event.target.closest('[data-tracking-action]')?.dataset.trackingAction
  if (trackingAction === 'start') {
    startTrackingSimulation()
    stopTrackingTimer()
    trackingTimer = setInterval(() => {
      if (activePath !== '/tracking' || !advanceTrekker()) stopTrackingTimer()
      renderActiveView()
    }, 1300)
  }
  if (trackingAction === 'pause') {
    pauseTrackingSimulation()
    stopTrackingTimer()
  }
  if (trackingAction === 'advance') advanceTrekker()
  if (trackingAction === 'reset') {
    resetTrackingSimulation()
    stopTrackingTimer()
  }
  if (trackingAction) renderActiveView()
})
