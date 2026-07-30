export function Modal({ title, content, actions = '', id = 'modal-preview' }) {
  return `
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
      <div class="modal__surface">
        <div class="modal__heading">
          <h3 id="${id}-title">${title}</h3>
          <button class="icon-button" type="button" aria-label="Close dialog">×</button>
        </div>
        <div class="modal__content">${content}</div>
        ${actions ? `<footer class="modal__actions">${actions}</footer>` : ''}
      </div>
    </section>
  `
}
