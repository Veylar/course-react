import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from '../ClickCounter/ClickCounter'
import 'utils/creators'
import Btn from 'components/Btn'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { octopuses: [this.createOctopus()] }
  }

  createOctopus = () => {
    return { inInversed: true }
  }

  handleAdd = () => {
    this.setState({ octopuses: [...this.state.octopuses, { isInversed: Math.round(Math.random) }] })
  }

  handleDelete = () => {
    this.setState({
      octopuses: this.state.octopuses.filter((octopus, i) => i !== this.state.octopuses.length - 1),
    })
  }

  //   handleAllRight = () => {
  //     this.setState({
  //       octopuses: this.state.octopuses.map(octopus => (octopus, isInversed: true)))
  //   }
  // }

  render() {
    return (
      <div>
        <h1 className="text-center">So here is some magic</h1>
        <div className="row justify-center wrap">
          <Btn onClick={this.handleAdd}>Add</Btn>
          <Btn onClick={this.handleDelete}>Delete</Btn>
          <Btn onClick={this.handleAllRight}>All Right</Btn>
        </div>
        <div className="row justify-center wrap">
          {this.state.octopuses.map((octopus, i) => (
            <SpinningLogo inverse={octopus.isInversed} key={i} />
          ))}
        </div>
        <ClickCounter />
      </div>
    )
  }
}
