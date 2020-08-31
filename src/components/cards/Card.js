import React from 'react'
import styled from 'styled-components'
import { cardTypes, colors } from '../../constants'

const Card = ({ scale = 1.0, children }) => (
	<div className="bounds">
		<Outer scale={ scale }>
			<Inner>
				{ children }
			</Inner>
		</Outer>
	</div>
)

const Inner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	border: 2px solid ${ colors.border };
	overflow: hidden;
`

const Outer = styled.div`
	position: relative;
	display: flex;
	flex-shrink: 0;
	justify-content: center;
	align-items: center;
	width: 315px;
	height: 440px;
	padding: 15px;
	border-radius: 15px;
	box-shadow: 0 5px 30px 0 rgba(0, 0, 100, 0.15);
	background-color: ${ colors.white };
	transform: scale(${ ({ scale }) => scale });
	transform-origin: center bottom;
	transition: transform ease 150ms;
	pointer-events: none;
	opacity: 1;
	.bounds:hover & {
		z-index: 9999;
		transform: scale(2.0);
	}
`

export default Card
