import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from '../ClickCounter/ClickCounter'
import 'utils/creators'
import Btn from 'components/Btn'
import { throws } from 'assert'
const random = () => {
  return Boolean(Math.round(Math.random()))
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { octopuses: [this.createOctopus()] }
  }

  createOctopus = () => {
    return { isInversed: random() }
  }

  handleAdd = () => {
    this.setState({ octopuses: [...this.state.octopuses, this.createOctopus()] })
  }

  handleDelete = () => {
    this.setState({
      octopuses: this.state.octopuses.filter((octo, i) => i !== this.state.octopuses.length - 1),
    })
  }

  handleAllRight = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octo => {
        return { ...octo, isInversed: false }
      }),
    })
  }

  handleAllLeft = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octo => {
        return { ...octo, isInversed: true }
      }),
    })
  }

  handleInvertAll = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octo => {
        return { ...octo, isInversed: !octo.isInversed }
      }),
    })
  }

  handleDeleteRight = () => {
    this.setState({
      octopuses: this.state.octopuses.filter(octo => octo.isInversed),
    })
  }

  handleDeleteLeft = () => {
    this.setState({ octopuses: this.state.octopuses.filter(octo => !octo.isInversed) })
  }

  handleRandomize = () => {
    this.setState({
      octopuses: this.state.octopuses.map(octo => {
        return { ...octo, isInversed: random() }
      }),
    })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">So here is some magic</h1>
        <div className="row justify-center wrap">
          <Btn className="m-a" onClick={this.handleAdd}>
            Add
          </Btn>
          <Btn className="m-a" onClick={this.handleDelete}>
            Delete
          </Btn>
          <Btn className="m-a" onClick={this.handleInvertAll}>
            Invert All
          </Btn>
          <Btn className="m-a" onClick={this.handleAllRight}>
            All Right
          </Btn>
          <Btn className="m-a" onClick={this.handleAllLeft}>
            All Left
          </Btn>
          <Btn className="m-a" onClick={this.handleDeleteRight}>
            Delete Right
          </Btn>
          <Btn className="m-a" onClick={this.handleDeleteLeft}>
            Delete Left
          </Btn>
          <Btn className="m-a" onClick={this.handleRandomize}>
            Randomize
          </Btn>
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
