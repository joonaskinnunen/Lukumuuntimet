import React, {useEffect} from 'react'
import { Breadcrumb, Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Conversion = () => {

    useEffect(() => {
        document.title = 'Yksikkömuuntimet - Laske & Muunna'
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
                Yksikkömuuntimet
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
            Yksikkömuuntimet
            </h2>
            <p>
                Erilaisia hyödyllisiä yksikkömuuntimia arkipäivisiin ja vähemmän arkipäivisiin tarpeisiin.<br />
                Yksikkömuuntimilla voit muuttaa erilaisia yksiköitä, kuten mittayksiköitä ja lukuja toiseen yksikköön.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/yksikkomuuntimet/pituusmuunnin">
                    <Nav.Link>Pituusmuunnin / etäisyysmuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/desimaali-binaari-muunnin">
                    <Nav.Link>Desimaali-binäärilukumuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/binaari-desimaali-muunnin">
                    <Nav.Link>Binääri-desimaalilukumuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/desimaali-heksadesimaali-muunnin">
                    <Nav.Link>Desimaali-heksadesimaalimuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/desimaali-oktaaliluku-muunnin">
                    <Nav.Link>Desimaali-oktaalilukumuunnin</Nav.Link>
                </LinkContainer>
            </Nav>
            <div style={contentStyle}>
            <p>Sivuiltamme löydät muuntimia, joilla voit muuntaa erilaisia mittayksiköitä. Voit esimerkiksi muuntaa senttimetrit tuumiksi tai toisinpäin, tuumat senttimetreiksi. </p>
            <p>Jos mietit miten binäärilukuja luetaan, katso lisätietoa binääriluvuista ja <a href="/yksikkomuuntimet/binaari-desimaali-muunnin">muuta binääriluvut desimaaliluvuiksi Binääri-desimaalilukumuuntimella.</a></p>
            </div>
        </div>
    )
}

export default Conversion