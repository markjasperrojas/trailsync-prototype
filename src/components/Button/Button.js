const variants = new Set(['primary', 'secondary', 'ghost', 'danger'])

export function Button({
  label,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  attributes = '',
}) {
  const safeVariant = variants.has(variant) ? variant : 'primary'

  return `<button class="button button--${safeVariant} button--${size} ${className}" type="${type}" ${attributes}>${label}</button>`
}
