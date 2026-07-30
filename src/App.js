import { routes } from './router/routes.js'

export function App(currentPath) {
  const route = routes[currentPath] ?? routes['/']
  const content = route.page()
  document.title = `${route.title} | TrailSync`

  return route.layout({ content, currentPath, title: route.title })
}
