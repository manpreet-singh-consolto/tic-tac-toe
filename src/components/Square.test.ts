import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Square } from './Square';

describe('Square Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
  });

  it('should render button element with correct value', () => {
    const onClick = vi.fn();
    const button = Square({ value: 'X', onClick });
    container.appendChild(button);

    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button.textContent).toBe('X');
  });

  it('should call onClick handler when clicked', () => {
    const onClick = vi.fn();
    const button = Square({ value: 'O', onClick });
    container.appendChild(button);

    button.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should apply winning class when isWinning is true', () => {
    const onClick = vi.fn();
    const button = Square({ value: 'X', onClick, isWinning: true });
    container.appendChild(button);

    expect(button.classList.contains('winning')).toBe(true);
  });

  it('should not apply winning class when isWinning is false', () => {
    const onClick = vi.fn();
    const button = Square({ value: 'X', onClick, isWinning: false });
    container.appendChild(button);

    expect(button.classList.contains('winning')).toBe(false);
  });

  it('should not apply winning class when isWinning is undefined', () => {
    const onClick = vi.fn();
    const button = Square({ value: 'O', onClick });
    container.appendChild(button);

    expect(button.classList.contains('winning')).toBe(false);
  });

  it('should render with square base class', () => {
    const onClick = vi.fn();
    const button = Square({ value: 'X', onClick });
    container.appendChild(button);

    expect(button.classList.contains('square')).toBe(true);
  });

  it('should render empty button when value is null', () => {
    const onClick = vi.fn();
    const button = Square({ value: null, onClick });
    container.appendChild(button);

    expect(button.textContent).toBe('');
  });

  it('should render empty button when value is undefined', () => {
    const onClick = vi.fn();
    const button = Square({ value: undefined, onClick });
    container.appendChild(button);

    expect(button.textContent).toBe('');
  });

  it('should handle numeric values', () => {
    const onClick = vi.fn();
    const button = Square({ value: 42, onClick });
    container.appendChild(button);

    expect(button.textContent).toBe('42');
  });

  it('should handle string values', () => {
    const onClick = vi.fn();
    const button = Square({ value: 'test', onClick });
    container.appendChild(button);

    expect(button.textContent).toBe('test');
  });
});