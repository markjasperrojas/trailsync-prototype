export function Input({ id, label, type = 'text', placeholder = '', hint = '', required = false, value = '' }) {
  const requiredMark = required ? '<span aria-hidden="true">*</span>' : ''
  const describedBy = hint ? `aria-describedby="${id}-hint"` : ''

  return `
    <label class="field" for="${id}">
      <span class="field__label">${label} ${requiredMark}</span>
      <input class="field__input" id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" value="${value}" ${describedBy} ${required ? 'required' : ''} />
      ${hint ? `<span class="field__hint" id="${id}-hint">${hint}</span>` : ''}
    </label>
  `
}
