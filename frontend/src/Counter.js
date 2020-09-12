import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div> 
    )
  }

  handleIncrement = () => {
  this.setState((prevState) => ({count: prevState.count + 1}));
  } 

  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  }
}

export default Counter
