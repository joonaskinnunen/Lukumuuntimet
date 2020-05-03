import React, { useEffect } from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Finance = () => {

    useEffect(() => {
        document.title = 'Terveys - Laske & Muunna'
    })

    const iconsStyle = {
        color: 'grey',
        marginRight: '5px'
    }

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
                    <Nav.Link><i className="fas fa-weight" style={iconsStyle}></i>Painoindeksilaskuri</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Finance