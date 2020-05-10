import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

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
                <p>Laske & Muunna on sivusto, josta löydät laskimia ja muuntimia monenlaisiin käyttötarkoituksiin.</p><p>Voit esimerkiksi muuttaa eri pituus tai mittayksiköitä toiseen <Link to="/yksikkomuuntimet/pituusmuunnin">pituus / etäisyysmuuntimella</Link>.
                </p>
                <p>
                    Jos opiskelet tai työskentelet tietokoneiden kanssa, binääri-, heksa- tai oktaalilukumuuntimista voi olla hyötyä. Löydät nämä lukumuuntimet <Link to="/yksikkomuuntimet">yksikkömuuntimet-sivulta</Link>.
                <br />
                Opiskellessa monesti tehtäviksi annettuihin esseisiin ja tehtäviin kuuluu merkki- tai sanamäärävaatimuksia. Voit tarkistaa kirjoittamasi tekstin merkki- ja sanamäärän <Link to="/hyoty/merkki-ja-sanalaskuri/">merkki- ja sanalaskurilla</Link>.
                </p>
                <p>
                    Jos taas mietit omaa painoa, terveyteen liittyvien laskureiden osiosta löytyy esimerkiksi <Link to="/terveys/painoindeksilaskuri">painoindeksilaskuri</Link>, jolla tarkistat oman painoindeksin ja riskin sairastua painon vuoksi.
                </p>
                <p>
                    <Link to="/raha/alv-laskuri/">ALV-laskurilla</Link> voit laskea arvonlisäveron määrän verottomasta tai verollisesta summasta.
                </p>
            </div>
        </div>
    )
}

export default Home