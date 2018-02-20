## defer-render-hoc

Forked from [https://github.com/hanford/defer-render-hoc](https://github.com/hanford/defer-render-hoc).

Added WaitingComponent argument, so you can display some kind of loader while waiting for render.

Defer expensive react rendering with [rAF](https://www.npmjs.com/package/raf)

<br />

## Install

```
$ npm install defer-render-hoc --save
```

## Usage

```js
import React, { Component } from 'react'
import DeferRender from 'defer-render-hoc'

class RandomComp extends Component {
  ...

  render () {
    const { scroll } = this.props

    ...
  }
}

export default DeferRender(RandomComp)
```

## Demo
See this [CodeSandbox for a demo](https://codesandbox.io/s/pjxkjjxv8m).

MIT © [Jack Hanford](http://jackhanford.com)
