import React from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Useful = () => {
    return (
        <div>
            <Breadcrumb>
                <LinkContainer to="../">
                <Breadcrumb.Item>
                Alkuun
                </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                Hyöty
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Hyöty
            </h2>
            <p>
                Erilaisia hyödyllisiä laskimia arkisiin ja vähemmän arkisiin ongelmiin.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/hyoty/merkki-ja-sanalaskuri/">
                    <Nav.Link>Merkki- ja sanalaskuri</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Useful