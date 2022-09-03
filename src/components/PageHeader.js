import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <Wrapper>
        <StyledLink to='/' >
          Home
        </StyledLink>
        <StyledLink to='/' >
          Recipes
        </StyledLink>
    </Wrapper>
  )
}

const StyledLink = styled(Link) `
text-decoration:none;
padding:10px;
font-size:20px;
color: white;
`

const Wrapper = styled.header `
display:flex;
justify-content: space-around;
height: 50px;
width: 100%;
background-color: gray;
`