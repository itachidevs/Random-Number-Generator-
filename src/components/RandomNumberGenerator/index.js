import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    let generateNumber = 0
    generateNumber = Math.floor(Math.random() * 100)
    this.setState({number: generateNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">Generate a random in the range of 0 100</p>
          <button
            className="button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <h1 className="RandomNumber">{number}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
