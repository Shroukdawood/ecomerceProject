import React from 'react'
import { useRoutes } from 'react-router-dom'
import Error404 from './error/Error404'
import { NavDropdown } from 'react-bootstrap'

export default function Pages() {
 const pageRoutes= useRoutes([
    {
      element:<Error404/>,
      path:"/*"
    },

 ])
    return (
    <>
    <NavDropdown title="Pages" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">About Us</NavDropdown.Item>
            <NavDropdown.Item path="/*">404 Error</NavDropdown.Item>
            <NavDropdown.Item href="#">Login</NavDropdown.Item>
            <NavDropdown.Item href="#">Register</NavDropdown.Item>
            <NavDropdown.Item href="#">Terms & Conditions</NavDropdown.Item>
          </NavDropdown>
    </>
  )
}
