import { faCodeCompare, faHeart, faMobileScreenButton, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useState } from 'react'
import {  NavLink, Form, Image} from 'react-bootstrap'

import { useAuthContext } from '../context/AuthContext';
import enimsge from "../assets/imagesfashon/eng.png"
import { Link } from 'react-router-dom';

export default function MainHeader() {
const [slectlanguage , setSelectLanguage] = useState("eng");
const languages = [{
  code:"eng",
  name:"English",  
},
{
  code:"fr",
  name:"French",
},
{
  code:"us",
  name:"USA",
}
];
  const handleLanguageChange = (code) => {
    setSelectLanguage(code);
    // Add logic to change the language of the website here
    console.log(`Language changed to: ${code}`);
  };
const {isAuth ,login, logout} = useAuthContext();

  return (
    <>
    <header  fixed="top"  style={{display:'flex',alignItems:"flex-end" ,justifyContent:"center" ,width:'100%' , margin:'auto',padding:'20px'}}>
     <div  style={{display:'flex',alignItems:"flex-end" ,justifyContent:"center"}} className='col-6'>
     <div>
     <Form.Select aria-label="Language" style={{position:"relative"}}
       value={slectlanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="language-select"
     >
      
      {languages.map((language) => (
          <option key={language.code} value={language.code}>
        {language.name}
          </option>
        ))}
      
    </Form.Select>
    
     </div>
     <div className="d-inline-block mx-3">
       <Form.Select aria-label="Currency">
      
      <option value="1">USD</option>
      <option value="2">EUR</option>
      <option value="3">GBR</option>
    </Form.Select>
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
          
            {isAuth ? (
              <NavLink onClick={logout} className="me-4">
              <FontAwesomeIcon icon={faUser} /> Logout
            </NavLink>
            ) : (<Link  to='/login'  className="me-4" style={{textDecoration:'none',color:"black"}}>
              <FontAwesomeIcon icon={faUser} /> Login
            </Link>) }
            
          </div>    
   </header>

    
    </>
  )
}
