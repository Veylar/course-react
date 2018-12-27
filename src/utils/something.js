const pantheons = {
	GREEK: 'Greek pantheon',
	NORSE: 'Norse pantheon',
	EGYPTIAN: 'Egyptian pantheon',
	AZTEC: 'Aztec pantheon',
}

const pantheonRegion = {
	[pantheons.GREEK]: 'Greece',
	[pantheons.NORSE]: 'Scandinavia',
	[pantheons.EGYPTIAN]: 'Egypt',
	[pantheons.AZTEC]: 'Central Mexico',
}

const pantheonLord = {
	[pantheons.GREEK]: 'Zeus',
	[pantheons.NORSE]: 'Odin',
	[pantheons.EGYPTIAN]: 'Osiris',
	[pantheons.AZTEC]: 'Quetzalcoatl',
}

const pantheonDeathGod = {
	[pantheons.GREEK]: 'Hades',
	[pantheons.NORSE]: 'Hel',
	[pantheons.EGYPTIAN]: 'Anubis',
	[pantheons.AZTEC]: 'Mictlantecuhtli',
}

const pantheonTypicalTraits = {
	[pantheons.GREEK]: {
		luxurious: true,
		proud: true,
		pretentious: true,
		knowItAll: true,
	},
	[pantheons.NORSE]: {
		gloomy: true,
		deadly: true,
		frozen: true,
		glorious: true,
	},
	[pantheons.EGYPTIAN]: {
		solar: true,
		dressedUp: true,
		halfAnimal: true,
		wise: true,
	},
	[pantheons.AZTEC]: {
		weird: true,
		probablyBird: true,
		bloody: true,
		difficultToPronounce: true,
	},
}

const gods = [
	{
		name: 'Poseidon',
		pantheon: pantheons.GREEK,
	},
	{
		name: 'Athena',
		pantheon: pantheons.GREEK,
	},
	{
		name: 'Hera',
		pantheon: pantheons.GREEK,
	},
	{
		name: 'Thor',
		pantheon: pantheons.NORSE,
	},
	{
		name: 'Loki',
		pantheon: pantheons.NORSE,
	},
	{
		name: 'Tyr',
		pantheon: pantheons.NORSE,
	},
	{
		name: 'Thoth',
		pantheon: pantheons.EGYPTIAN,
	},
	{
		name: 'Bastet',
		pantheon: pantheons.EGYPTIAN,
	},
	{
		name: 'Set',
		pantheon: pantheons.EGYPTIAN,
	},
	{
		name: 'Tezcatlipoca',
		pantheon: pantheons.AZTEC,
	},
	{
		name: 'Huitzilopochtli',
		pantheon: pantheons.AZTEC,
	},
	{
		name: 'Chalchiuhtlicue',
		pantheon: pantheons.AZTEC,
	},
]

const pantheonsEmoji = {
	[pantheons.GREEK]: '🥦',
	[pantheons.NORSE]: '❄️',
	[pantheons.EGYPTIAN]: '🛸',
	[pantheons.AZTEC]: '🧛',
}

const getGodsNames = pantheon => {
	return gods.filter(god => god.pantheon === pantheon).map(god => god.name)
}

const knowPantheon = pantheon => {
	return `the ${pantheon} was founded in the ${
		pantheonRegion[pantheon]
	} and it is assumed to know ${pantheonLord[pantheon]} as the main god of the ${pantheon} ${
		pantheonsEmoji[pantheon]
	} followed by the God of Death, ${pantheonDeathGod[pantheon]}
    and other gods, such as ${getGodsNames(pantheon)}.`
}

const getGodsTraits = pantheon => {
	const pantheonTraits = pantheonTypicalTraits[pantheon]
	return Object.keys(pantheonTraits)
}

const knowGods = pantheon => {
	return `It is assumed that the gods from the ${pantheon}
	are ${getGodsTraits(pantheon)} just as the gods listed above.`
}

export const getLecture = pantheon => {
	return `As many of you know, there are many deities in the world. Basically, they divided into pantheons mainly by their historical regions.
	For example, ${knowPantheon(pantheon)} ${knowGods(pantheon)}`
}

const getMatchingTraits = (godTraits, pantheon) => {
	const pantheonTraits = pantheonTypicalTraits[pantheon]
	return Object.keys(godTraits).filter(god => pantheonTraits[god] === godTraits[god])
}

const someGod = {
	frozen: true,
	probablyBird: true,
	bloody: true,
	dressedUp: true,
	halfAnimal: true,
	wise: true,
}

export const findPantheon = godTraits => {
	const pantheonMatches = Object.values(pantheons).map(pantheon => {
		return {
			matchingTraits: getMatchingTraits(godTraits, pantheon),
			pantheon: pantheon,
		}
	})

	const bestMatch = pantheonMatches.find(pt => pt.matchingTraits.length >= 3)
	return bestMatch ? bestMatch.pantheon : 'This god is outside any pantheon we included.'
}
