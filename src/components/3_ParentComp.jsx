import React, { Component } from 'react'
import RegularComp from './3_RegularComp'
import PureComp from './3_PureComp'
import Memo from './4_memo'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: `Errie`
      }
    }

    componentDidMount () {
        setInterval (() => {
        this.setState({
            name: `Errie`
        })
        }, 2000)
    }

  render() {
    console.log(`********Parent component render************`)
    return (
      <div>Parent Component
      <Memo name = {this.state.name}/>
      {/* <RegularComp name={this.state.name}/>
      <PureComp name={this.state.name}/> */}
    </div>
    )
  }
}

export default ParentComp

// Every two seconds, parent and the regular component are rear-ended but the pure component is never re-rendered.
