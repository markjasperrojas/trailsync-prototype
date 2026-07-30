import { Navbar } from '../components/index.js'

export function PublicLayout({ content, currentPath }) {
  return `
    <div class="app-layout app-layout--public">
      ${Navbar({
        brand: 'TrailSync',
        items: [
          { label: 'Home', href: '#/', active: currentPath === '/' },
          { label: 'Trails', href: '#/booking', active: currentPath === '/booking' },
          { label: 'About', href: '#/weather', active: currentPath === '/weather' },
          { label: 'Sign in', href: '#/login', active: currentPath === '/login' },
        ],
      })}
      ${content}
      <footer class="app-footer">TrailSync prototype <span aria-hidden="true">·</span> Tourism journeys, connected.</footer>
    </div>
  `
}
