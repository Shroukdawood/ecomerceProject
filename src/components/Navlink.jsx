import React from 'react'
import { NavLink } from 'react-bootstrap'

export default function Navlink({name,path}) {
  
  return (
    <NavLink className='nav-link' to={path}> {name}</NavLink>
  )
}
