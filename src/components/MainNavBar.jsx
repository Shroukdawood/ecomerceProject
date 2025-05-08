import '../assets/nav.module.css';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons/faBasketShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";""
import logo from "../assets/imagesfashon/logo_dark.png";
import logo2 from "../assets/imagesfashon/logo_light.png";


import {
  Button,
  Card,
  Container,
  Dropdown,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
  Offcanvas,
} from "react-bootstrap";

import Pages from '../pages/Pages';
import Products from '../products/Products';

export default function MainNavBar() {
  
  // const [showSearch, setShowSearch] = useState(false);
  // const [showCart, setShowCart] = useState(false);
  // const handleShowSearch = () => setShowSearch(!showSearch);
  // const handleShowCart = () => setShowCart(!showCart);
  // const handleClose = () => setShowSearch(false);
  // const handleCloseCart = () => setShowCart(false);
  // const handleShow = () => setShowSearch(true);
  return (
    <>
      <Navbar
         style={{width:"100%", background: "white" ,boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" ,borderRadius:"2px",zIndex:'111'}}
        expand="lg"
        className="bg-body-white row "
        sticky="top"
      >
        <Container fluid >
          
          <Navbar.Brand to="/home" className="d-flex align-items-center col-4" > 
            <Image src={logo2} alt="Logo" width="100" height="50" className="me-2"/>
            <Image src={logo} alt="Logo" width="100" height="50" className="me-2"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 col-8 " gap={3} style={{ maxHeight: "100px" , display:"flex" ,justifyContent:"space-between"}} navbarScroll >

          <NavDropdown title="Home" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">Fashion1</NavDropdown.Item>
            <NavDropdown.Item href="#">Fashion2</NavDropdown.Item>
            <NavDropdown.Item href="#">Furniture1</NavDropdown.Item>
            <NavDropdown.Item href="#">Furniture2</NavDropdown.Item>
            <NavDropdown.Item href="#">Electronics1</NavDropdown.Item>
            <NavDropdown.Item href="#">Electronics2</NavDropdown.Item>
          </NavDropdown>
          <Pages/>

           <Products/>
          <NavLink to="/contact" className="nav-link">
            Contact US
          </NavLink>
          <NavLink to="/search" className="btn btn-outline-success">
            <Button variant="primary">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>

            <Offcanvas backdrop="static">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />
                  <Button variant="primary" type="submit" className="mt-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>
          </NavLink>
          <NavLink to="/cart" className="btn btn-outline-success">
            <Button variant="primary">
              <FontAwesomeIcon icon={faBasketShopping} />
            </Button>
            <Offcanvas backdrop="static">
              <Offcanvas.Header closeButton className="bg-light">
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
              </Offcanvas.Header>
            </Offcanvas>
          </NavLink>
          </Nav>
        </Navbar.Collapse>
        

        </Container>
      </Navbar>
    </>
  );
}
