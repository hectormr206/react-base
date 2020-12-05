import React from 'react'
import { Nav, NavLink } from './styles'

import { MdHome, MdImage, MdVideoLibrary, MdDataUsage } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <NavLink exact to='/'><MdHome size={SIZE} /></NavLink>
      <NavLink to='/image'><MdImage size={SIZE} /></NavLink>
      <NavLink to='/video'><MdVideoLibrary size={SIZE} /></NavLink>
      <NavLink to='/fetch'><MdDataUsage size={SIZE} /></NavLink>
    </Nav>
  )
}
