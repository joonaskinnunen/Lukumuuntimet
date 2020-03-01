import React from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Finance = () => {
    return (
        <div>
            <Breadcrumb>
                <LinkContainer to="../">
                <Breadcrumb.Item>
                Alkuun
                </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                Terveys
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
            Terveys
            </h2>
            <p>
                Erilaisia hyödyllisiä terveyteen ja jokapäiväiseen elämään liittyviä laskimia ja muuntimia.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/terveys/painoindeksilaskuri/">
                    <Nav.Link>Painoindeksilaskuri</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Finance