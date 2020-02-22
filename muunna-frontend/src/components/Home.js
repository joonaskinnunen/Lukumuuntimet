import React from 'react'
import { ListGroup, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Home = () => {
    return (
        <div>
            <h2>
                Laskimet ja muuntimet kaikkiin tarpeisiin
            </h2>
            <p>
                Sivustoltamme löydät laskimia ja muuntimia erilaisiin käyttötarpeisiin.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/matematiikka/">
                    <Nav.Link>Matematiikka</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hyoty/">
                    <Nav.Link>Hyöty</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Home