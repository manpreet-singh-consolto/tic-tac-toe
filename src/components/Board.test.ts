import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import Board from './Board'

describe('Board Component', () => {
  it('should render 9 squares', () => {
    const squares = Array(9).fill(null)
    const { container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
      },
    })

    const squareElements = container.querySelectorAll('[data-testid^="square-"]')
    expect(squareElements).toHaveLength(9)
  })

  it('should pass correct square values to Square components', () => {
    const squares = ['X', 'O', null, 'X', 'O', null, null, 'X', 'O']
    const { container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
      },
    })

    squares.forEach((value, index) => {
      const square = container.querySelector(`[data-testid="square-${index}"]`)
      expect(square?.textContent).toBe(value || '')
    })
  })

  it('should call onClick handler with correct index when square is clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    const squares = Array(9).fill(null)

    const { container } = render(Board, {
      props: {
        squares,
        onClick,
      },
    })

    const square = container.querySelector('[data-testid="square-4"]') as HTMLElement
    await user.click(square)

    expect(onClick).toHaveBeenCalledWith(4)
  })

  it('should render squares in correct grid layout', () => {
    const squares = Array(9).fill(null)
    const { container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
      },
    })

    const board = container.querySelector('[data-testid="board"]')
    const rows = board?.querySelectorAll('[data-testid^="row-"]')

    expect(rows).toHaveLength(3)

    rows?.forEach((row) => {
      const squareElements = row.querySelectorAll('[data-testid^="square-"]')
      expect(squareElements).toHaveLength(3)
    })
  })

  it('should highlight winning squares when winningLine is provided', () => {
    const squares = ['X', 'X', 'X', 'O', 'O', null, null, null, null]
    const winningLine = [0, 1, 2]

    const { container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
        winningLine,
      },
    })

    winningLine.forEach((index) => {
      const square = container.querySelector(`[data-testid="square-${index}"]`)
      expect(square).toHaveClass('winning')
    })
  })

  it('should not highlight squares when winningLine is undefined', () => {
    const squares = ['X', 'X', 'X', 'O', 'O', null, null, null, null]

    const { container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
        winningLine: undefined,
      },
    })

    const allSquares = container.querySelectorAll('[data-testid^="square-"]')
    allSquares.forEach((square) => {
      expect(square).not.toHaveClass('winning')
    })
  })

  it('should not highlight squares when winningLine is empty', () => {
    const squares = ['X', 'X', 'X', 'O', 'O', null, null, null, null]
    const winningLine: number[] = []

    const { container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
        winningLine,
      },
    })

    const allSquares = container.querySelectorAll('[data-testid^="square-"]')
    allSquares.forEach((square) => {
      expect(square).not.toHaveClass('winning')
    })
  })

  it('should handle multiple winning squares correctly', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', null, null, null]
    const winningLine = [0, 4, 8]

    const { container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
        winningLine,
      },
    })

    winningLine.forEach((index) => {
      const square = container.querySelector(`[data-testid="square-${index}"]`)
      expect(square).toHaveClass('winning')
    })

    // Verify non-winning squares are not highlighted
    const nonWinningIndices = [1, 2, 3, 5, 6, 7]
    nonWinningIndices.forEach((index) => {
      const square = container.querySelector(`[data-testid="square-${index}"]`)
      expect(square).not.toHaveClass('winning')
    })
  })

  it('should update displayed values when squares prop changes', async () => {
    const squares = Array(9).fill(null)
    const { rerender, container } = render(Board, {
      props: {
        squares,
        onClick: vi.fn(),
      },
    })

    // Initial state - all empty
    let square0 = container.querySelector('[data-testid="square-0"]')
    expect(square0?.textContent).toBe('')

    // Update squares array
    const updatedSquares = ['X', 'O', null, null, null, null, null, null, null]
    await rerender({
      squares: updatedSquares,
      onClick: vi.fn(),
    })

    // Verify updated values are displayed
    square0 = container.querySelector('[data-testid="square-0"]')
    expect(square0?.textContent).toBe('X')

    const square1 = container.querySelector('[data-testid="square-1"]')
    expect(square1?.textContent).toBe('O')
  })
})