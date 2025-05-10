import React from 'react'
import { NavDropdown } from 'react-bootstrap';

export default function HomeDropdown() {
  const HomeLinks = [{
    name: "Fashion1",
    path: "/fashionHome"
  }, {
    name: "Fashion2",
    path: "/fashionHome"
  }, {
    name: "Furniture1",
    path: "/furniture"
  },
  {
    name: "Furniture2",
    path: "/furniture"
  },
  {
    name: "Electronics1",
    path: "/electronics"
  },
  {
    name: "Electronics2",
    path: "/electronics"
  }
  ];
  return (
    <NavDropdown title="Home" id="navbarScrollingDropdown">
      {HomeLinks.map((link, i) => (
        <NavDropdown.Item key={i} href={link.path}>{link.name}</NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}
