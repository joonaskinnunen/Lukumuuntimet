import React, { useEffect } from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Math = () => {

    useEffect(() => {
        document.title = 'Matematiikka - Laske & Muunna'
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
                    Matematiikka
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Matemaattiset muuntimet
            </h2>
            <p>
                Matematiikkaan liittyvät laskimet ja muuntimet.
                Matemaattisilla muuntimilla voit muuttaa erilaisia matemaattisia
                yksiköitä toiseen yksikköön.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/matematiikka/prosenttilaskuri">
                    <Nav.Link><i className="fas fa-percent" style={iconsStyle}></i>Prosenttilaskuri</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/matematiikka/kertotaulu">
                    <Nav.Link><i className="fas fa-times" style={iconsStyle}></i> Kertotaulu</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Math