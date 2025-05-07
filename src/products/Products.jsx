import React from 'react'
import { Button, Card, Container, Dropdown, NavDropdown, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import menuBanner1 from "../assets/imagesfashon/menu_banner1.jpg";
import menuBanner2 from "../assets/imagesfashon/menu_banner2.jpg";
import menuBanner3 from "../assets/imagesfashon/menu_banner3.jpg";

export default function Products() {
  return (
    <NavDropdown title="Productes" id="navbarScrollingDropdown">
    <div
      
      className="d-flex justify-content-between "
      style={{ height: "200px", width: "200px" }}
    >
      <Dropdown class="productMenu" href="#" >
        Women's Fashion
        <Dropdown.Item className="text-dark">
          <Link>Vestibulum sed</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink>Donec Vitaefacilisis</NavLink>
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
      <Dropdown class="productMenu"  href="#">
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
      <Dropdown class="productMenu"  href="#">
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
      <Dropdown class="productMenu"  href="#">
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
  )
}
