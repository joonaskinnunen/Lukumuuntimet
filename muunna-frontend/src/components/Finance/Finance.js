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
                Raha ja talous
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
            Raha ja talous
            </h2>
            <p>
                Erilaisia hyödyllisiä rahaan ja talouteen liittyviä laskimia ja muuntimia.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/raha/alv-laskuri/">
                    <Nav.Link>ALV-laskuri</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Finance