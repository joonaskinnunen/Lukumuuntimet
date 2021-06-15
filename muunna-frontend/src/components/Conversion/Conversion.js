import React, { useEffect } from 'react'
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
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Pituusmuunnin / etäisyysmuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/desimaali-binaari-muunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Desimaali-binäärilukumuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/binaari-desimaali-muunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Binääri-desimaalilukumuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/desimaali-heksadesimaali-muunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Desimaali-heksadesimaalimuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/desimaali-oktaaliluku-muunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Desimaali-oktaalilukumuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/prosentti-desimaalimuunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Prosentti-desimaalilukumuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/desimaali-prosenttilukumuunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Desimaali-prosenttilukumuunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/kengankoko-muunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Kengän koko-muunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/celsius-fahrenheit-muunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Celsius-Fahrenheit-muunnin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/yksikkomuuntimet/fahrenheit-celsius-muunnin">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Fahrenheit-Celsius-muunnin</Nav.Link>
                </LinkContainer>
            </Nav>
            <div style={contentStyle}>
                <p>Sivuiltamme löydät muuntimia, joilla voit muuntaa erilaisia mittayksiköitä. Voit esimerkiksi muuntaa <a href="https://www.laskejamuunna.fi/yksikkomuuntimet/pituusmuunnin">senttimetrit tuumiksi</a> tai toisinpäin, <a href="https://www.laskejamuunna.fi/yksikkomuuntimet/pituusmuunnin">tuumat senttimetreiksi</a>. </p>
                <p>Jos mietit miten binäärilukuja luetaan, katso lisätietoa binääriluvuista ja <a href="/yksikkomuuntimet/binaari-desimaali-muunnin">muuta binääriluvut desimaaliluvuiksi Binääri-desimaalilukumuuntimella. </a>
                Voit myös <a href="/yksikkomuuntimet/desimaali-heksadesimaali-muunnin">muuttaa lukuja heksadesimaaliluvuiksi</a> tai <a href="/yksikkomuuntimet/desimaali-oktaaliluku-muunnin">oktaaliluvuiksi</a>.</p>
            </div>
        </div>
    )
}

export default Conversion