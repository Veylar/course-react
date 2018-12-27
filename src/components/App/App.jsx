import React from 'react'
import * as sortingHat from 'utils/sortingHat'
import * as something from 'utils/something'
import SpinningLogoList from 'components/SpinningLogoList'
import { getLecture, findPantheon } from '../../utils/something'

const someGod = {
	frozen: true,
	probablyBird: true,
	bloody: true,
	dressedUp: true,
	halfAnimal: true,
	wise: true,
}

console.log(findPantheon(someGod))

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">So here is some magic</h1>
				<SpinningLogoList />
			</div>
		)
	}
}
