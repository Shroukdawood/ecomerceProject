import '../assets/nav.module.css';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons/faBasketShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";""
import logo from "../assets/imagesfashon/logo_dark.png";
import logo2 from "../assets/imagesfashon/logo_light.png";

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SearchLogic from './SearchLogic';
import {
  Button,
  Container,
  Image,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
  Offcanvas,
} from "react-bootstrap";

import Pages from '../pages/Pages';
import Products from '../products/Products';
import HomeDropdown from '../home/HomeDropdown';

export default function MainNavBar() {
  const [modalShow, setModalShow] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);
  // const [showCart, setShowCart] = useState(false);
  // const handleShowSearch = () => setShowSearch(!showSearch);
  // const handleShowCart = () => setShowCart(!showCart);
  // const handleClose = () => setShowSearch(false);
  // const handleCloseCart = () => setShowCart(false);
  // const handleShow = () => setShowSearch(true);
  function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search
        </Modal.Title>
      </Modal.Header>
     <SearchLogic/>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

  return (
    <>
      <Navbar
         style={{width:"100%", background: "white" ,boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" ,borderRadius:"2px",zIndex:'111'}}
        expand="lg"
        className="bg-body-white row "
        sticky="top"
      >
        <Container fluid >
          
          <Navbar.Brand  className="d-flex align-items-center col-4" > 
          <NavLink to="/fashionHome">
            <Image src={logo2} alt="Logo" width="100" height="50" className="me-2"/>
            <Image src={logo} alt="Logo" width="100" height="50" className="me-2"/>
         </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 col-8 " gap={3} style={{ maxHeight: "100px" , display:"flex" ,justifyContent:"space-between"}} navbarScroll >

          <HomeDropdown/>
          <Pages/>

           <Products/>
          <NavLink to="/contact" className="nav-link">
            Contact US
          </NavLink>
          

     <Button className='mb-3' variant="light" onClick={() => setModalShow(true)}>
       <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
         
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



