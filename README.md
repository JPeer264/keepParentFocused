# keep-parent-focused

[![Build Status](https://travis-ci.com/JPeer264/keepParentFocused.svg?branch=main)](https://travis-ci.com/JPeer264/keepParentFocused)
[![Coverage Status](https://coveralls.io/repos/github/JPeer264/keepParentFocused/badge.svg?branch=main)](https://coveralls.io/github/JPeer264/keepParentFocused?branch=main)

Alternative to [focus-within](https://caniuse.com/?search=focus-within) and inspired by [css-tricks](https://css-tricks.com/keeping-parent-visible-child-focus/).

Live demo is available [here](https://codesandbox.io/s/keep-parent-focused-iytoc)

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
