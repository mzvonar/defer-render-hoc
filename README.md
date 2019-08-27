## defer-render-hoc

Forked from [https://github.com/hanford/defer-render-hoc](https://github.com/hanford/defer-render-hoc).

Added WaitingComponent argument, so you can display some kind of loader while waiting for render.
Added option to disable functionality for SSR.

Defer expensive react rendering with [rAF](https://www.npmjs.com/package/raf)

<br />

## Install

```
$ npm install @mzvonar/defer-render-hoc --save
```

## Usage

```js
import React, { Component } from 'react'
import deferRender from '@mzvonar/defer-render-hoc'

class RandomComp extends Component {
  ...

  render () {
    const { scroll } = this.props

    ...
  }
}

export default deferRender(RandomComp)
```

### SSR
You can use third parameter isEnabled to disable this component. Either pass boolean value or a function that returns boolean.

```js
export default deferRender(RandomComp, null, canUseDom())
```

## Demo
See this [CodeSandbox for a demo](https://codesandbox.io/s/pjxkjjxv8m).

MIT © [Jack Hanford](http://jackhanford.com)
