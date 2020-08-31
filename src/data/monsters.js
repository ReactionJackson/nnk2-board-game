import { fightTypes } from '../constants'

export const monsters = {
	easy: [
		{
			name: "Slime",
			desc: "A bouncy slime with a big smile. Loves sweets.",
			artwork: false,
			type: fightTypes.magical,
			power: 4,
			threat: 1,
			ability: {
				name: "Multiply",
				desc: "Each round that Slime remains on a Quest, its Threat will double."
			},
			rewards: {
				experience: 0,
				kingsguilder: 0,
				supplies: 0,
				candies: 0,
				rerolls: 0
			},
		}
	],
	medium: [
		// ...
	],
	hard: [
		// ...
	],
	master: [
		// ...
	]
}
