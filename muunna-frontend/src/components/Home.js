import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Home = () => {

    useEffect(() => {
        document.title = 'Laskimet ja muuntimet kaikkiin tilanteisiin - Laske & Muunna'
    })

    const contentDivStyle = {
        margin: '20px'
    }

    return (
        <div>
            <h2>
                Laskimet ja muuntimet kaikkiin tarpeisiin
            </h2>
            <p>
                Sivustoltamme löydät laskimia ja muuntimia erilaisiin käyttötarpeisiin.
            </p>
            <Nav fill variant="tabs" className="flex-column">
                <LinkContainer to="/yksikkomuuntimet/">
                    <Nav.Link><i className="fas fa-exchange-alt iconsStyle"></i>Yksikkömuuntimet</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/matematiikka/">
                    <Nav.Link><i className="fas fa-square-root-alt iconsStyle"></i>Matematiikka</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hyoty/">
                    <Nav.Link><i className="fas fa-star-of-life iconsStyle"></i>Hyöty</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/raha/">
                    <Nav.Link><i className="fas fa-euro-sign iconsStyle"></i> Raha ja talous</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/terveys/">
                    <Nav.Link><i className="fas fa-heartbeat iconsStyle"></i>Terveys</Nav.Link>
                </LinkContainer>
            </Nav>
            <div style={contentDivStyle}>
                <p>Laske & Muunna on sivusto, josta löydät laskimia ja muuntimia monenlaisiin käyttötarkoituksiin.</p><p>Voit esimerkiksi muuttaa eri pituus tai mittayksiköitä toiseen <a href="/yksikkomuuntimet/pituusmuunnin">pituus / etäisyysmuuntimella</a>.
                </p>
                <p>
                    Jos opiskelet tai työskentelet tietokoneiden kanssa, binääri-, heksa- tai oktaalilukumuuntimista voi olla hyötyä. Löydät nämä lukumuuntimet <a href="/yksikkomuuntimet">yksikkömuuntimet-sivulta</a>.
                <br />
                Opiskellessa monesti tehtäviksi annettuihin esseisiin ja tehtäviin kuuluu merkki- tai sanamäärävaatimuksia. Voit tarkistaa kirjoittamasi tekstin merkki- ja sanamäärän <a href="/hyoty/merkki-ja-sanalaskuri/">merkki- ja sanalaskurilla</a>.
                </p>
                <p>
                    Jos taas mietit omaa painoa, terveyteen liittyvien laskureiden osiosta löytyy esimerkiksi <a href="/terveys/painoindeksilaskuri">painoindeksilaskuri</a>, jolla tarkistat oman painoindeksin ja riskin sairastua painon vuoksi.
                </p>
                <p>
                    <a href="/raha/alv-laskuri/">ALV-laskurilla</a> voit laskea arvonlisäveron määrän verottomasta tai verollisesta summasta.
                </p>
            </div>
        </div>
    )
}

export default Home