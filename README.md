# keep-parent-focused

Alternative to [focus-within](https://caniuse.com/?search=focus-within) and inspired by [css-tricks](https://css-tricks.com/keeping-parent-visible-child-focus/).

## Getting started

```sh
npm install keep-parent-focused
```

## Usage

**keepParentFocused(element[, focusClass])**

Parameters:
  - element `<HTMLElement | null>`: Any HTML element where the `focusClass` should get applied on. It will check all focusable children.
  - focusClass `<String>` (optional): String will get applied as class to given element. Default: `focused`

Returns:
  - Function: A function which can be called to remove all eventlisteners

Example:
```js
import keepParentFocused from 'keep-parent-focused';

keepParentFocused(document.getElementById('my-element'));

// Applies '.focused' on '#my-element' when the button is focused
//
// <div id="my-element">
//   <button>Any button</button>
// <div>
```
