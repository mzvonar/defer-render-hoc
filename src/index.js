import React, { PureComponent } from 'react'
import raf from 'raf'
import hoistNonReactStatic from 'hoist-non-react-statics'

/**
 * Allows two animation frames to complete to allow other components to update
 * and re-render before mounting and rendering an expensive `WrappedComponent`.
 */
export default function deferComponentRender (WrappedComponent, WaitingComponent = null, isEnabled = true) {
  class DeferredRenderWrapper extends PureComponent {
    state = {
      shouldRender: !(typeof isEnabled === 'function' ? isEnabled() : isEnabled)
    };

    componentDidMount () {
      if(!this.state.shouldRender) {
        raf(() => raf(() => !this.unmounted && this.setState({ shouldRender: true })));
      }
    }

    componentWillUnmount() {
      this.unmounted = true;
    }

    render () {
      return this.state.shouldRender ? <WrappedComponent {...this.props} /> : WaitingComponent;
    }
  }

  return hoistNonReactStatic(DeferredRenderWrapper, WrappedComponent)
}
