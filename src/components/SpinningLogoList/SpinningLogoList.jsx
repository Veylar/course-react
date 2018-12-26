import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from '../ClickCounter/ClickCounter'
import * as sortingHat from 'utils/sortingHat'
import Btn from 'components/Btn'
import { throws } from 'assert'
const ponies = [
  'https://vignette.wikia.nocookie.net/mlp/images/9/92/Canterlot_Castle_Pinkie_Pie_1.png/revision/latest?cb=20110915190145',
  'https://vignette.wikia.nocookie.net/the-princess/images/e/e5/Mlp_fim_twilight_sparkle_happy_vector_3_by_luckreza8-db4ql0m.png/revision/latest?cb=20180411192543',
  'https://vignette.wikia.nocookie.net/mlpfimroleplay/images/2/22/Rarity2.png/revision/latest?cb=20161221214903',
]
const random = () => {
  return Boolean(Math.round(Math.random()))
}

const randomImage = max => {
  return Math.floor(Math.random() * max)
}

const student = {
  bloodlust: true,
  deadly: true,
  haveAnAxe: true,
  god: true,
  sexy: true,
  cruel: true,
  resourcefulness: true,
}

console.log(sortingHat.determineHouseAndGiveInfo(student))

export default class spinningLogoList extends React.Component {
  constructor() {
    super()
    this.state = { octopuses: [this.createOctopus()] }
  }

  createOctopus = () => {
    return { isInversed: random(), image: ponies[randomImage(ponies.length)] }
  }

  handleAdd = () => {
    this.setState({
      octopuses: [...this.state.octopuses, this.createOctopus()],
    })
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
    this.setState({
      octopuses: this.state.octopuses.filter(octo => !octo.isInversed),
    })
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
            <SpinningLogo inverse={octopus.isInversed} image={octopus.image} key={i} />
          ))}
        </div>
        <ClickCounter />
      </div>
    )
  }
}
