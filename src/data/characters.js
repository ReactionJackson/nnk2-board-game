export const characters = [
	{
		name: 'Higgledy',
		artwork: false,
		stats: [ 1, 1, 1 ],
		ability: false
	},
	{
		name: 'Tani',
		artwork: false,
		stats: [ 2, 3, 1 ],
		ability: {
			name: 'Sky Pirate',
			desc: 'Once per turn Tani can add 1 Supply or Kingsguilder to the inventory.'
		}
	},
	{
		name: 'Evan',
		artwork: false,
		stats: [ 1, 1, 4 ],
		ability: {
			name: 'Planning',
			desc: 'Once per turn Evan can exchange any 2 resources in the inventory for any 2 other resources.'
		}
	},
	{
		name: 'Roland',
		artwork: false,
		stats: [ 3, 2, 1 ],
		ability: {
			name: 'Swordsman',
			desc: 'Each turn Roland can automatically defeat a monster instead of taking part in a Quest.'
		}
	},
	{
		name: 'Bracken',
		artwork: false,
		stats: [ 2, 2, 2 ],
		ability: {
			name: 'Adaptable',
			desc: 'Each turn Bracken can add 1 to any of her Fight Values, or any Higgledy\'s Fight Values.'
		}
	}	
]
