import { useEffect, useRef, useState } from 'react'

const clickableSelector = 'a[href], button:enabled, [role="button"]:not([aria-disabled="true"]), input:enabled, select:enabled, summary'
let activeCursorCount = 0

const interactiveSelector = [
  'a[href]',
  'button:not([disabled])',
  '[role="button"]',
  '.info-target',
  'h1',
  '.section-title',
  '.entry',
  '.skill',
  '.award',
  '.project-copy',
  '[data-cursor="line"]',
].join(', ')

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const pointRef = useRef({ x: -80, y: -80 })
  const [isEnabled, setIsEnabled] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isClickable, setIsClickable] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    if (!window.matchMedia) return

    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateEnabled = () => setIsEnabled(finePointer.matches && !reducedMotion.matches)

    updateEnabled()
    finePointer.addEventListener('change', updateEnabled)
    reducedMotion.addEventListener('change', updateEnabled)

    return () => {
      finePointer.removeEventListener('change', updateEnabled)
      reducedMotion.removeEventListener('change', updateEnabled)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement

    if (!isEnabled) {
      if (activeCursorCount === 0) root.classList.remove('has-custom-cursor')
      return
    }

    activeCursorCount += 1
    root.classList.add('has-custom-cursor')

    const setInteractiveTarget = (target: EventTarget | null) => {
      setIsClickable(target instanceof Element && Boolean(target.closest(clickableSelector)))
      setIsInteractive(target instanceof Element && Boolean(target.closest(interactiveSelector)))
    }

    const paint = () => {
      const cursor = cursorRef.current
      if (!cursor) return

      cursor.style.transform = `translate3d(${pointRef.current.x}px, ${pointRef.current.y}px, 0)`
      cursor.dataset.visible = 'true'
      frameRef.current = null
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') return

      pointRef.current = { x: event.clientX, y: event.clientY }
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(paint)
    }

    const onPointerLeave = () => {
      if (cursorRef.current) cursorRef.current.dataset.visible = 'false'
      setIsInteractive(false)
      setIsClickable(false)
      setIsPressed(false)
    }

    const onPointerOver = (event: PointerEvent) => setInteractiveTarget(event.target)
    const onPointerOut = (event: PointerEvent) => setInteractiveTarget(event.relatedTarget)

    const onPointerDown = (event: PointerEvent) => setIsPressed(event.button === 0)
    const onPointerUp = () => setIsPressed(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('pointerup', onPointerUp)
    document.addEventListener('pointercancel', onPointerUp)
    window.addEventListener('blur', onPointerLeave)

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerover', onPointerOver)
    document.addEventListener('pointerout', onPointerOut)
    document.documentElement.addEventListener('mouseleave', onPointerLeave)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointerup', onPointerUp)
      document.removeEventListener('pointercancel', onPointerUp)
      window.removeEventListener('blur', onPointerLeave)
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerover', onPointerOver)
      document.removeEventListener('pointerout', onPointerOut)
      document.documentElement.removeEventListener('mouseleave', onPointerLeave)
      activeCursorCount = Math.max(0, activeCursorCount - 1)
      if (activeCursorCount === 0) root.classList.remove('has-custom-cursor')
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div
      ref={cursorRef}
      className={`cursor-indicator${isInteractive ? ' is-interactive' : ''}${isClickable ? ' is-clickable' : ''}${isPressed ? ' is-pressed' : ''}`}
      data-visible="false"
      data-testid="custom-cursor"
      aria-hidden="true"
    >
      <span className="cursor-indicator__shape" />
    </div>
  )
}
