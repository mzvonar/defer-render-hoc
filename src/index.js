import React, { PureComponent } from 'react'
import raf from 'raf'
import hoistNonReactStatic from 'hoist-non-react-statics'

/**
 * Allows two animation frames to complete to allow other components to update
 * and re-render before mounting and rendering an expensive `WrappedComponent`.
 */
export default function deferComponentRender (WrappedComponent) {
  class DeferredRenderWrapper extends PureComponent {
    state = { shouldRender: false }

    componentDidMount () {
      raf(() => raf(() => this.setState({ shouldRender: true })))
    }

    render () {
        const { loading, ...otherProps } = this.props;
      return this.state.shouldRender ? <WrappedComponent {...otherProps} /> : loading || null
    }
  }

  return hoistNonReactStatic(DeferredRenderWrapper, WrappedComponent)
}
