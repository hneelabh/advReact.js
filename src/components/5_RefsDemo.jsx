import React, { Component } from 'react'

// aim: as soon as we load the page, we want the input field to be focused
// done by three steps:
// 1. create a ref (common to do it in a const so that can be reference throughtout the component)
// 2. Attach this ref to input element in the render method
// 3. Call the focus method on this input element

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      // 1. creation of a ref
      this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }


  render() {
    return (
      <div>
        {/* 2. attaching ref in render */}
        <input type="text" ref = {this.inputRef} />
        <button onClick={this.clickHandler} >Click</button>
      </div>
    )
  }
}

export default RefsDemo