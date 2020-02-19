import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Muunna.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Etusivu</Nav.Link>
            <Nav.Link href="#link">Matematiikka</Nav.Link>
            <Nav.Link href="#link">Raha</Nav.Link>
            <Nav.Link href="#link">Huvi</Nav.Link>
            <Nav.Link href="#link">Hyöty</Nav.Link>
            <NavDropdown title="Lisätietoa" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Puuttuva muunnin / laskuri?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sivustosta</NavDropdown.Item>
            </NavDropdown>
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