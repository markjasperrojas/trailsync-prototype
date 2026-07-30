import './styles/global.css'
import { App } from './App.js'
import { startRouter } from './router/router.js'
import { signInAs, signOut } from './services/authService.js'
import { canAdvanceBooking, changeBookingStep, confirmBooking, resetBooking, selectBookingOption } from './services/bookingService.js'
import { checkAvailableGuides, completeDispatchAssignment, resetDispatch, selectDispatchGuide } from './services/dispatchService.js'

const appRoot = document.querySelector('#app')
let activePath = '/'

startRouter((currentPath) => {
  activePath = currentPath
  appRoot.innerHTML = App(currentPath)
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
    appRoot.innerHTML = App(activePath)
    return
  }

  const bookingAction = event.target.closest('[data-booking-action]')?.dataset.bookingAction
  if (bookingAction === 'back') changeBookingStep(-1)
  if (bookingAction === 'next' && canAdvanceBooking()) changeBookingStep(1)
  if (bookingAction === 'confirm') confirmBooking()
  if (bookingAction === 'restart') resetBooking()
  if (bookingAction) {
    appRoot.innerHTML = App(activePath)
    return
  }

  const guideId = event.target.closest('[data-dispatch-select]')?.dataset.dispatchSelect
  if (guideId) {
    selectDispatchGuide(guideId)
    appRoot.innerHTML = App(activePath)
    return
  }

  const dispatchAction = event.target.closest('[data-dispatch-action]')?.dataset.dispatchAction
  if (dispatchAction === 'check') checkAvailableGuides()
  if (dispatchAction === 'complete') completeDispatchAssignment()
  if (dispatchAction === 'restart') resetDispatch()
  if (dispatchAction) appRoot.innerHTML = App(activePath)
})
