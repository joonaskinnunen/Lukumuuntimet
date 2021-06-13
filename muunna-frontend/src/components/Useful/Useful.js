import React, { useEffect } from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

const Useful = () => {

    useEffect(() => {
        document.title = 'Hyöty - Laske & Muunna'
    })

    const contentStyle = {
        marginTop: '30px'
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
                <LinkContainer to="/hyoty/merkki-ja-sanalaskuri">
                    <Nav.Link><i className="fas fa-sort-amount-down iconsStyle"></i>Sanalaskuri</Nav.Link>
                </LinkContainer>
            </Nav>
            <div style={contentStyle}>
                <p>
                    Hyöty-osiosta löydät erilaisia laskimia ja muuntimia arkisiin asioihin.
                </p>
                <p>
                    Voit esimerkiksi laskea tekstin sanojen ja merkkien määrän <Link to="/hyoty/merkki-ja-sanalaskuri">sanalaskurilla</Link>.
                </p>
            </div>
        </div>
    )
}

export default Useful