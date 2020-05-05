import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const UrlNotFound = () => {

    useEffect(() => {
        document.title = '404 - Laske & Muunna'
    })

    return (
        <div>
            <h2>
                404 - Sivua ei löytynyt
            </h2>
            <p>
                Harmi. Osoite jota yritit avata ei toimi. Jos päädyit tähän klikkaamalla sivustollamme olevaa linkkiä, ilmoitathan meille rikkinäisestä linkistä <a href="https://www.laskejamuunna.fi/ota-yhteytta">tästä</a>.
                <br />
                Voit jatkaa sivuston selaamista alla olevan valikon kautta.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/yksikkomuuntimet/">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Yksikkömuuntimet</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/matematiikka/">
                    <Nav.Link><i className="fas fa-square-root-alt iconsStyle"></i>Matematiikka</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hyoty/">
                    <Nav.Link><i className="fas fa-star-of-life iconsStyle"></i>Hyöty</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/raha/">
                    <Nav.Link><i className="fas fa-euro-sign iconsStyle"></i> Raha ja talous</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/terveys/">
                    <Nav.Link><i className="fas fa-heartbeat iconsStyle"></i>Terveys</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default UrlNotFound