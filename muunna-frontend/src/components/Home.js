import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Home = () => {

    const iconsStyle = {
        color: 'grey'
    }
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
                    <Nav.Link><i class="fas fa-square-root-alt" style={iconsStyle}></i> Matematiikka</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hyoty/">
                    <Nav.Link><i class="fas fa-star-of-life" style={iconsStyle}></i> Hyöty</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Home