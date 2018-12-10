import React from 'react'
import Btn from 'components/Btn'
const clicks = 0
const step = 1
const max = 20

export default class ClickCounter extends React.Component {
  state = { clicks, step, max }

  handleClicks = () => {
    this.setState({ clicks: this.state.clicks + this.state.step })
  }

  handleStepClick = () => {
    this.setState({ step: this.state.step + 1 })
  }

  handleMaxClick = () => {
    this.setState({ max: this.state.max + 1 })
  }

  handleReset = () => {
    this.setState({ clicks, step, max })
  }

  render() {
    return (
      <div className="row justify-center p-t bg-tertiary section">
        <div className="card standard-border card-narrow shadow">
          <div className="info">
            <div>Clicks</div>

            <div className="m-t">
              <span className="info-key">Max Value:</span>
              <span className="text-accent">{this.state.max}</span>
            </div>

            <div className="m-t">
              <span className="info-key">Clicks:</span>
              <span className="text-accent">
                {this.state.clicks >= this.state.max ? 'max reached!' : this.state.clicks}
              </span>
            </div>

            <div className="m-t">
              <span className="info-key">Clicks left:</span>
              <span className="text-accent">
                {this.state.clicks >= this.state.max
                  ? 'no clicks left!'
                  : this.state.max - this.state.clicks}
              </span>
            </div>

            <div className="m-t">
              <span className="info-key">Step:</span>
              <span className="text-accent">{this.state.step}</span>
            </div>
          </div>

          <Btn
            disable={this.state.clicks >= this.state.max}
            onClick={this.handleClicks}
            className="m-t d-block"
          >
            Click
          </Btn>
          <Btn onClick={this.handleReset} className="m-t d-block">
            Reset
          </Btn>
          <Btn onClick={this.handleStepClick} className="m-t d-block">
            Increase Step
          </Btn>
          <Btn onClick={this.handleMaxClick} className="m-t d-block">
            Increase Max
          </Btn>
        </div>
      </div>
    )
  }
}
