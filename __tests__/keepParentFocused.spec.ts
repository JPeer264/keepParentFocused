import { getByTestId } from '@testing-library/dom';

import '@testing-library/jest-dom/extend-expect';

import keepParentFocused from '../keepParentFocused';

describe('keepParentFocused', () => {
  let parent: ReturnType<typeof getByTestId>;
  let outsideButton: ReturnType<typeof getByTestId>;
  let insideButton: ReturnType<typeof getByTestId>;
  let insideInput: ReturnType<typeof getByTestId>;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <button data-testid="outside-button">Click me</button>
        <div data-testid="parent-div">
          <button data-testid="inside-button">Click me</button>
          <input data-testid="inside-input" />
        </div>
      </div>
    `;

    parent = getByTestId(document.body, 'parent-div');
    outsideButton = getByTestId(document.body, 'outside-button');
    insideButton = getByTestId(document.body, 'inside-button');
    insideInput = getByTestId(document.body, 'inside-input');
  });

  it('should not throw any error', () => {
    const removeEventListeners = keepParentFocused(null);

    expect(removeEventListeners).not.toThrow();
  });

  it('should keep parent focused', () => {
    keepParentFocused(parent, 'focus-class');

    insideButton.focus();

    expect(parent).toHaveClass('focus-class');
    expect(outsideButton).not.toHaveFocus();
    expect(insideButton).toHaveFocus();

    outsideButton.focus();

    expect(parent).not.toHaveClass('focus-class');
    expect(outsideButton).toHaveFocus();
    expect(insideButton).not.toHaveFocus();
  });

  it('should keep parent focused on inputs', () => {
    keepParentFocused(parent, 'focus-class');

    insideInput.focus();

    expect(parent).toHaveClass('focus-class');
    expect(outsideButton).not.toHaveFocus();
    expect(insideInput).toHaveFocus();

    outsideButton.focus();

    expect(parent).not.toHaveClass('focus-class');
    expect(outsideButton).toHaveFocus();
    expect(insideInput).not.toHaveFocus();
  });

  it('should NOT focus parent as it cannot be focused', () => {
    keepParentFocused(parent, 'focus-class');

    outsideButton.focus();

    expect(parent).not.toHaveClass('focus-class');
    expect(outsideButton).toHaveFocus();
    expect(insideButton).not.toHaveFocus();

    // cannot change focus
    parent.focus();

    expect(parent).not.toHaveClass('focus-class');
    expect(outsideButton).toHaveFocus();
    expect(insideButton).not.toHaveFocus();

    insideButton.focus();

    expect(parent).toHaveClass('focus-class');
    expect(outsideButton).not.toHaveFocus();
    expect(insideButton).toHaveFocus();
  });

  it('should remove event listeners', () => {
    const removeEventListener = keepParentFocused(parent, 'focus-class');

    insideButton.focus();

    expect(parent).toHaveClass('focus-class');
    expect(outsideButton).not.toHaveFocus();
    expect(insideButton).toHaveFocus();

    outsideButton.focus();

    expect(parent).not.toHaveClass('focus-class');
    expect(outsideButton).toHaveFocus();
    expect(insideButton).not.toHaveFocus();

    removeEventListener();

    insideButton.focus();

    expect(parent).not.toHaveClass('focus-class');
    expect(outsideButton).not.toHaveFocus();
    expect(insideButton).toHaveFocus();
  });
});
