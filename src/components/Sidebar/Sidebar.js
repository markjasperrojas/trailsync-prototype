export function Sidebar({ title = 'Workspace', items = [] }) {
  const links = items
    .map(
      ({ label, href = '#', active = false }) =>
        `<a class="sidebar__link ${active ? 'is-active' : ''}" href="${href}" ${active ? 'aria-current="page"' : ''}>${label}</a>`,
    )
    .join('')

  return `<aside class="sidebar"><p class="sidebar__title">${title}</p><nav class="sidebar__links" aria-label="Dashboard navigation">${links}</nav></aside>`
}
