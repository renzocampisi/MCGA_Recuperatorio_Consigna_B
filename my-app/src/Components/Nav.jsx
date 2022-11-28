import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <Navbar>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
        </ul>
    </Navbar>
  )
}

export default Nav

const Navbar = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    background-color: #7fccff;

    ul{
        display: flex;
        gap: 20px;
        list-style: none;

        a{
            text-decoration: none;
            font-size: 24px;
            color: white;
            font-weight: 600;
        }
    }

    
`