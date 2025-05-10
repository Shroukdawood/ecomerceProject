
import { NavDropdown } from 'react-bootstrap';
export default function Pages() {
const pageLinks =[{
  name:"About Us",
  path:"/aboutus",
  
},
{
  name:"404 Error",
  path:"/*",
  
},
{
  name:"Login",
  path:"/login",
 
},
{
  name:"Register",
  path:"/register",
 
},
{
  name:"Terms & Condation",
  path:"/termscondation",
  
}]
    return (
    <>
    <NavDropdown title="Pages" id="navbarScrollingDropdown">
           {
            pageLinks.map((link, i) => (
             <NavDropdown.Item key={i} href={link.path}>{link.name}</NavDropdown.Item>
            ))
           }
          </NavDropdown>
    </>
  )
}
