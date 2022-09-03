import React from 'react'
import styled from 'styled-components'

export default function RecipeHeader() {
    return (
        <Wrapper>
            <h1>Recipe Name</h1>
            <h3>prep time: Input</h3>
            <h3>cook time: Input</h3>
            <h3>total time: Input</h3>
            <h2>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
        </Wrapper>
    )
}

const Wrapper = styled.header `
padding:30px;
width: 100%;
background-color: blue;
`
