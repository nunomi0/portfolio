import '@testing-library/jest-dom/vitest'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: query.includes('pointer: fine'),
    media: '',
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }),
})

HTMLDialogElement.prototype.showModal = function showModal() { this.setAttribute('open', '') }
HTMLDialogElement.prototype.close = function close() { this.removeAttribute('open') }
HTMLElement.prototype.scrollTo = () => {}
