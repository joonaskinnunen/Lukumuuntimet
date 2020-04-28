import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Home = () => {

    useEffect(() => {
        document.title = 'Laskimet ja muuntimet kaikkiin tilanteisiin - Laske & Muunna'
    })

    const iconsStyle = {
        color: 'grey',
        marginRight: '5px'
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
                <LinkContainer to="/yksikkomuuntimet/">
                    <Nav.Link><i className="fas fa-exchange-alt" style={iconsStyle}></i>Yksikkömuuntimet</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/matematiikka/">
                    <Nav.Link><i className="fas fa-square-root-alt" style={iconsStyle}></i>Matematiikka</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hyoty/">
                    <Nav.Link><i className="fas fa-star-of-life" style={iconsStyle}></i>Hyöty</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/raha/">
                    <Nav.Link><i className="fas fa-euro-sign" style={iconsStyle}></i> Raha ja talous</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/terveys/">
                    <Nav.Link><i className="fas fa-heartbeat" style={iconsStyle}></i>Terveys</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Home