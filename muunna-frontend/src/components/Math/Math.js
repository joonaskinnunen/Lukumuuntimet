import React, { useEffect } from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Math = () => {

    useEffect(() => {
        document.title = 'Matematiikka - Laske & Muunna'
    })

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
                Matemaattisilla muuntimilla voit muuttaa erilaisia matemaattisia
                yksiköitä toiseen yksikköön.
                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            </p>
            <Nav fill variant="tabs" className="flex-column">
            </Nav>
        </div>
    )
}

export default Math