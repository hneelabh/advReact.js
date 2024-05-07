// used snippet (rpce) for pure component

import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log(`Pure component render`)
    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp

// Every two seconds, parent and the regular component are rear-ended but the pure component is never re-rendered.

//  regular component does not implement the shouldComponentUpdate method, it always returns true by default.
// a pure component on the other hand implements shouldComponentUpdate with a shallow prop and state comparison.