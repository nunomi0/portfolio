import { render, waitFor } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Cursor } from './Cursor'

function CursorPair({ showDialogCursor }: { showDialogCursor: boolean }) {
  return (
    <>
      <Cursor />
      {showDialogCursor && <Cursor />}
    </>
  )
}

test('keeps the native cursor hidden after the dialog cursor closes', async () => {
  const { rerender } = render(<CursorPair showDialogCursor />)

  await waitFor(() => expect(document.documentElement).toHaveClass('has-custom-cursor'))
  rerender(<CursorPair showDialogCursor={false} />)

  expect(document.documentElement).toHaveClass('has-custom-cursor')
})
