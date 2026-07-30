export function Card({ title = '', eyebrow = '', content = '', footer = '', className = '' }) {
  return `
    <article class="card ${className}">
      ${eyebrow ? `<p class="card__eyebrow">${eyebrow}</p>` : ''}
      ${title ? `<h3 class="card__title">${title}</h3>` : ''}
      ${content ? `<div class="card__content">${content}</div>` : ''}
      ${footer ? `<footer class="card__footer">${footer}</footer>` : ''}
    </article>
  `
}
