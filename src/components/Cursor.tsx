import { useEffect, useRef, useState } from 'react'

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
      root.classList.remove('has-custom-cursor')
      return
    }

    root.classList.add('has-custom-cursor')

    const setInteractiveTarget = (target: EventTarget | null) => {
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
    }

    const onPointerOver = (event: PointerEvent) => setInteractiveTarget(event.target)
    const onPointerOut = (event: PointerEvent) => setInteractiveTarget(event.relatedTarget)

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerover', onPointerOver)
    document.addEventListener('pointerout', onPointerOut)
    document.documentElement.addEventListener('mouseleave', onPointerLeave)

    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerover', onPointerOver)
      document.removeEventListener('pointerout', onPointerOut)
      document.documentElement.removeEventListener('mouseleave', onPointerLeave)
      root.classList.remove('has-custom-cursor')
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div
      ref={cursorRef}
      className={`cursor-indicator${isInteractive ? ' is-interactive' : ''}`}
      data-visible="false"
      aria-hidden="true"
    >
      <span className="cursor-indicator__shape" />
    </div>
  )
}
