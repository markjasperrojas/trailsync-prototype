export function Breadcrumb({ items }) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${items
    .map((item, index) => {
      const label = typeof item === 'string' ? item : item.label
      const href = typeof item === 'string' ? '#' : item.href
      return `<li>${index === items.length - 1 ? `<span aria-current="page">${label}</span>` : `<a href="${href}">${label}</a>`}</li>`
    })
    .join('')}</ol></nav>`
}
