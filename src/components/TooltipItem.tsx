import { createContext, type PointerEvent as ReactPointerEvent, type ReactNode, useContext, useEffect, useRef, useState } from 'react'

type TooltipContextValue = {
  openTooltipId: string | null
  setOpenTooltipId: (id: string | null) => void
}

const TooltipContext = createContext<TooltipContextValue | null>(null)

type TooltipGroupProps = {
  children: ReactNode
  className?: string
}

export function TooltipGroup({ children, className = '' }: TooltipGroupProps) {
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null)
  const groupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!openTooltipId) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!groupRef.current?.contains(event.target as Node)) setOpenTooltipId(null)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenTooltipId(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openTooltipId])

  return (
    <TooltipContext.Provider value={{ openTooltipId, setOpenTooltipId }}>
      <div ref={groupRef} className={`info-group ${className}`.trim()}>
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

type TooltipItemProps = {
  id: string
  tooltip: string
  children: ReactNode
  className?: string
}

export function TooltipItem({ id, tooltip, children, className = '' }: TooltipItemProps) {
  const context = useContext(TooltipContext)
  const coarsePointer = useRef(false)
  if (!context) throw new Error('TooltipItem must be used inside TooltipGroup')

  const { openTooltipId, setOpenTooltipId } = context
  const isOpen = openTooltipId === id
  const tooltipId = `${id}-tooltip`

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    coarsePointer.current = event.pointerType !== 'mouse'
    if (coarsePointer.current) setOpenTooltipId(isOpen ? null : id)
  }

  return (
    <div
      className={`info-target ${isOpen ? 'is-open' : ''} ${className}`.trim()}
      tabIndex={0}
      aria-describedby={tooltipId}
      onPointerDown={handlePointerDown}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setOpenTooltipId(id)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setOpenTooltipId(null)
      }}
      onFocus={() => {
        if (!coarsePointer.current) setOpenTooltipId(id)
      }}
      onBlur={() => setOpenTooltipId(null)}
    >
      {children}
      <span id={tooltipId} className="hover-note" role="tooltip" aria-hidden={!isOpen}>
        {tooltip}
      </span>
    </div>
  )
}
