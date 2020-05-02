import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    const style = {
        backgroundColor: '#5a5a5a',
        marginTop: '30px',
        padding: '20px',
        color: '#fafafa',
        borderTop: '10px solid #e9eaee'
    }

    return (
        <Row style={style}>
                <Col xs={5} md={4}>
                    <p><b>Suosituimmat sivut</b>
                        <br />
                    <a href="https://www.laskejamuunna.fi/terveys/painoindeksilaskuri">Painoindeksilaskuri</a>
                    <br />
                    <a href="https://www.laskejamuunna.fi/hyoty/merkki-ja-sanalaskuri">Merkki- ja sanalaskuri</a>
                    <br />
                    <a href="https://www.laskejamuunna.fi/yksikkomuuntimet/desimaali-binaari-muunnin">Desimaali-binäärilukumuunnin</a>
                    <br />
                    <a href="https://www.laskejamuunna.fi/raha/alv-laskuri/">ALV-laskuri</a>
                    </p>
                </Col>
                <Col xs={1} md={4}>
                </Col>
                <Col xs={6} md={4}>
                    <p><b>Hyödyllisiä linkkejä</b>
                    <br />
                    <a href="https://kayttoohje.fi">Käyttöohjeet puhelimiin ja tabletteihin</a>
                    <br />
                    -
                    <br />
                    <a href="https://nettiohje.fi">Ohjeita laitteiden ja yhteyksien käyttöön</a>
                    </p>
                </Col>
            <Col style={{marginTop: '10px'}} xs={12}>
                ©2020 Laske & Muunna
            </Col>
        </Row>
    )
}

export default Footer