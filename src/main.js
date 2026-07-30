import './styles/global.css'
import { App } from './App.js'
import { startRouter } from './router/router.js'

const appRoot = document.querySelector('#app')

startRouter((currentPath) => {
  appRoot.innerHTML = App(currentPath)
})
