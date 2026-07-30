import { routes } from './routes.js'

export function getCurrentPath() {
  const path = window.location.hash.slice(1) || '/'
  return routes[path] ? path : '/'
}

export function startRouter(render) {
  const update = () => render(getCurrentPath())
  window.addEventListener('hashchange', update)
  update()
}
