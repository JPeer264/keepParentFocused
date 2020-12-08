const keepParentFocused = (element: HTMLElement | null, focusClass = 'focused'): () => void => {
  if (!element) {
    return () => undefined;
  }

  const addFocusClass = (): void => {
    element.classList.add(focusClass);
  };

  const removeFocusClass = (): void => {
    element.classList.remove(focusClass);
  };

  const clickableElements = Array.from(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=" - 1"])'));

  clickableElements.forEach((clickableElement) => {
    clickableElement.addEventListener('focus', addFocusClass);
    clickableElement.addEventListener('blur', removeFocusClass);
  });

  return () => {
    clickableElements.forEach((clickableElement) => {
      clickableElement.removeEventListener('focus', addFocusClass);
      clickableElement.removeEventListener('blur', removeFocusClass);
    });
  };
};

export default keepParentFocused;
