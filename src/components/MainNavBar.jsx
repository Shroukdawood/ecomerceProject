import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons/faBasketShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";""
import logo from "../assets/imagesfashon/logo_dark.png";
import logo2 from "../assets/imagesfashon/logo_light.png";
import menuBanner1 from "../assets/imagesfashon/menu_banner1.jpg";
import menuBanner2 from "../assets/imagesfashon/menu_banner2.jpg";
import menuBanner3 from "../assets/imagesfashon/menu_banner3.jpg";

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
import { Link } from "react-router-dom";

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
    {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav> */}
      <Navbar
         style={{ background: "white" ,boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" ,borderRadius:"2px"}}
        expand="xxl"
        className="bg-body-white"
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
          <NavDropdown title="Pages" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#">404 Error</NavDropdown.Item>
            <NavDropdown.Item href="#">Login</NavDropdown.Item>
            <NavDropdown.Item href="#">Register</NavDropdown.Item>
            <NavDropdown.Item href="#">Terms & Conditions</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Productes" id="navbarScrollingDropdown">
            <div
              
              className="d-flex justify-content-between "
              style={{ height: "200px", width: "200px" }}
            >
              <Dropdown href="#" >
                Women's Fashion
                <Dropdown.Item className="text-dark">
                  <Link>Vestibulum sed</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Donec Vitaefacilisis</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Donec Portitor</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>curobiture Tempus</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Vivamus in Tortor</Link>
                </Dropdown.Item>
              </Dropdown>
              <NavDropdown.Divider />
              <Dropdown href="#">
                Men's Fashion
                <Dropdown.Item>
                  <Link>Donec Vitae Ante Ante </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Etian Ac Rutrum</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Quisque Condimentum</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Curabitur Laareet</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Vivamus in Tortor</Link>
                </Dropdown.Item>
              </Dropdown>
              <NavDropdown.Divider />
              <Dropdown href="#">
                Kids' Fashion
                <Dropdown.Item>
                  <Link>Vestibulum sed</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Donec Vitaefacilisis</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Donec Portitor</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>curobiture Tempus</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Vivamus in Tortor</Link>
                </Dropdown.Item>
              </Dropdown>
              <NavDropdown.Divider />
              <Dropdown href="#">
                Accessories
                <Dropdown.Item>
                  <Link>Donec Vitae Ante Ante </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Etian Ac Rutrum</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Quisque Condimentum</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Curabitur Laareet</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link>Vivamus in Tortor</Link>
                </Dropdown.Item>
              </Dropdown>
              <NavDropdown.Divider />
            </div>
            <Container className="my-4">
              <div className="d-flex justify-content-between">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={menuBanner1} />
                  <Card.Body>
                    <Card.Title>10% Off</Card.Title>
                    <Card.Text>New Arrival</Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={menuBanner2} />
                  <Card.Body>
                    <Card.Title>23% Off</Card.Title>
                    <Card.Text>Kid's Fashion</Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={menuBanner3} />
                  <Card.Body>
                    <Card.Title>15% Off</Card.Title>
                    <Card.Text>Men's Fashion</Card.Text>
                    <Button variant="primary">Shop Now</Button>
                  </Card.Body>
                </Card>
              </div>
              </Container>
          </NavDropdown>
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
