import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Counter count={0} />
        <Instructions complete={true} />
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}

        <input value={this.state.inputName} onChange={evt => this.updateInputName(evt)}/>
        <button type="button" onClick={this.addRestaurant}>Submit</button>
      </div>
    )
  }

  updateInputName(evt) {
    this.setState({
      inputName: evt.target.value
    });
  }

  addRestaurant = () => {
    this.setState((prevState) => ({restaurants: [...prevState.restaurants,
     {id: this.state.restaurants.length + 1,
     name: this.state.inputName, rating: 0}]}))
  } 
}

export default App
