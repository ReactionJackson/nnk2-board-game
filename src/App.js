import React from 'react'
import styled from 'styled-components'
import { colors } from './constants'
import CharacterCard from './components/cards/CharacterCard'

const App = () => {
  return (
    <Container>
    	<Surface>
	  		{ [...Array(5)].map((_, id) => (
	  			<CharacterCard id={ id } key={ id } />
	  		)) }
	  	</Surface>
    </Container>
  )
}

const Surface = styled.div`
	display: flex;
	flex-shrink: 0;
	width: ${ 315 * 5 }px;
	transform: scale(${ ({ scale = 0.5 }) => scale });
	transform-origin: center bottom;
`

const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`

export default App
