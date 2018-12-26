import React from 'react'
import * as sortingHat from 'utils/sortingHat'
import * as something from 'utils/something'
import SpinningLogoList from 'components/SpinningLogoList'

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
