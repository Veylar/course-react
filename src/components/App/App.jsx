import React from 'react'
import SpinningLogo from 'components/SpinningLogo'
import ClickCounter from '../ClickCounter/ClickCounter'

const octopuses = [
	{ isInversed: true },
	{ isInversed: false },
	{ isInversed: false },
	{ isInversed: false },
	{ isInversed: false },
	{ isInversed: true },
	{ isInversed: true },
	{ isInversed: true },
	{ isInversed: false },
	{ isInversed: false },
	{ isInversed: false },
]

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">So here is some magic</h1>
				<div className="row justify-center wrap">
					{octopuses.map((octopus, i) => (
						<SpinningLogo inverse={octopus.isInversed} key={i} />
					))}
				</div>
				<ClickCounter />
			</div>
		)
	}
}
