import './styles/global.css'
import { App } from './App.js'
import { startRouter } from './router/router.js'
import { signInAs, signOut } from './services/authService.js'

const appRoot = document.querySelector('#app')

startRouter((currentPath) => {
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
  }
})
