import React, {useEffect} from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Conversion = () => {

    useEffect(() => {
        document.title = 'Yksikkömuuntimet - Laske & Muunna'
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
                Yksikkömuuntimet
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
            Yksikkömuuntimet
            </h2>
            <p>
                Erilaisia hyödyllisiä yksikkömuuntimia arkipäivisiin ja vähemmän arkipäivisiin tarpeisiin.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/yksikkomuuntimet/pituusmuunnin">
                    <Nav.Link>Pituusmuunnin / etäisyysmuunnin</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default Conversion