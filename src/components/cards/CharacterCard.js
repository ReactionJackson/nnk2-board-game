import React from 'react'
import styled from 'styled-components'
import { characters } from '../../data/characters'
import { colors } from '../../constants'
import Card from './Card'

const CharacterCard = ({ id = 0 }) => {

	const { name, artwork, ability, stats } = characters[id]

	return (
		<Card>
			<Nameplate>{ name }</Nameplate>
			<Artwork art={ artwork } />
			<Ability>
				{ ability ? (
					<p>
						<strong>{ ability.name }: </strong>
						{ ability.desc }
					</p>
				) : null }
			</Ability>
			<FightValues>
				{ stats.map((stat, i) =>
					<FightValue color={ colors.stats[i] }>{ stat }</FightValue>
				) }
			</FightValues>
		</Card>
	)
}

const Nameplate = styled.div`
	font-size: 25px;
	font-weight: 700;
	font-style: italic;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	padding: 5px 0;
	border-bottom: 2px solid ${ colors.border };
`

const Artwork = styled.div`
	height: 160px;
	${ ({ art }) => art ? `
		background: url(${ art }) center no-repeat;
		background-size: cover;
	` : `
		background-color: ${ colors.artwork };
	` }
`

const Ability = styled.div`
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 120px;
	padding: 10px 40px;
	border: 2px solid ${ colors.border };
	border-left: 0;
	border-right: 0;
`

const FightValues = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 86px;
`

const FightValue = styled.li`
	font-size: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65px;
	height: 65px;
	border: 2px solid ${ colors.border };
	border-radius: 50%;
	background-color: ${ ({ color }) => color || '#fff' };
`

export default CharacterCard
