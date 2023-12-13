import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onLettersCount = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="description" htmlFor="input">
            Enter the phrase
          </label>
          <input
            id="input"
            type="text"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.onLettersCount}
          />
          <p className="count-card">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
