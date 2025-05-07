import { faCodeCompare, faHeart, faMobileScreenButton, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Dropdown , Button, NavLink, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function MainHeader() {
//   const [language , setLanguage]=useState(null);
// const language = [{

// }];

  return (
    <>
    <header  fixed="top"  style={{display:'flex',alignItems:"flex-end" ,justifyContent:"center" ,width:'100%' , margin:'auto',padding:'20px'}}>
     <div  style={{display:'flex',alignItems:"flex-end" ,justifyContent:"center"}} className='col-6'>
     <div>
      <Dropdown name="language" id="language-dropdown" className="d-inline-block">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Language 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
          <Dropdown.Item href="#/action-3">French</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     </div>
     <div className="d-inline-block mx-3">
      <Dropdown name="currency" id="currency-dropdown">
        <Dropdown.Toggle  id="dropdown-basic">
          Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
          <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
          <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     </div> 
     <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faMobileScreenButton} className="m-2" /> 123-456-7890
          </div>
     </div>
    
          <div className='col-6 ' style={{display:'flex',alignItems:"flex-end" ,justifyContent:"center"}}>
            <NavLink className=" me-4">
              <FontAwesomeIcon icon={faCodeCompare} /> Compare
            </NavLink>
            <NavLink className="me-4">
              <FontAwesomeIcon icon={faHeart} /> Wishlist
            </NavLink>
            <NavLink  className="me-4">
              <FontAwesomeIcon icon={faUser} /> Login
            </NavLink>
          </div>    
   </header>

    
    </>
  )
}
