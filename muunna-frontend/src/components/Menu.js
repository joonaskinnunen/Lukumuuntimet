import React from 'react';
import { Navbar, Nav, NavItem, Form, FormControl, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Lukumuuntimet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Etusivu</Nav.Link>
            <LinkContainer to="/matematiikka">
              <NavItem>Matematiikka</NavItem>
            </LinkContainer>
            <Nav.Link href="#link">Raha</Nav.Link>
            <Nav.Link href="#link">Huvi</Nav.Link>
            <Nav.Link href="#link">Hyöty</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Haku" className="mr-sm-2" />
            <Button variant="outline-success">Haku</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
    )
}

export default Menu