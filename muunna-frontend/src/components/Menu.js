import React from 'react'
import { Navbar } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import logo from '.././logo.svg'

const Menu = () => {
    return (
      <Navbar bg="dark" variant="dark" className="p-3">
      <LinkContainer to="/">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <b>Laske & Muunna</b>
      </Navbar.Brand>
      </LinkContainer>
    </Navbar>
    )
}

export default Menu