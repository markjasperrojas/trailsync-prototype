export function Navbar({ brand = 'TrailSync', items = [] }) {
  const links = items.map(({ label, href = '#', active = false }) => `<a class="navbar__link ${active ? 'is-active' : ''}" href="${href}" ${active ? 'aria-current="page"' : ''}>${label}</a>`).join('')

  return `<header class="navbar"><a class="navbar__brand" href="#">${brand}</a><nav class="navbar__links" aria-label="Main navigation">${links}</nav></header>`
}
