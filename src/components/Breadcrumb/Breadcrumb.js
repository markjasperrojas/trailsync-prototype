export function Breadcrumb({ items }) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${items.map((item, index) => `<li>${index === items.length - 1 ? `<span aria-current="page">${item}</span>` : `<a href="#">${item}</a>`}</li>`).join('')}</ol></nav>`
}
