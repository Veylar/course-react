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

const pantheonTraits = {
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

const GodsNames = pantheon => {
	if ((gods.pantheon = pantheon)) {
		return gods.filter(godname => Object.values(gods.name))
	}
}

const knowPantheon = pantheon => {
	return `The ${pantheon} was founded in the ${
		pantheonRegion[pantheon]
	} and it is assumed to know ${
		pantheonLord[pantheon]
	} as the main god of the ${pantheon} followed by the God of Death, ${pantheonDeathGod[pantheon]} 
    and other gods, such as ${GodsNames(pantheon)}.`
}

console.log(knowPantheon(pantheons.GREEK))
