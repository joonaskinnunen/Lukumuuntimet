import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

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
                    <Link to="/terveys/painoindeksilaskuri#">Painoindeksilaskuri</Link>
                    <br />
                    <Link to="/hyoty/merkki-ja-sanalaskuri">Sanalaskuri</Link>
                    <br />
                    <Link to="/yksikkomuuntimet/desimaali-binaari-muunnin">Desimaali-binäärilukumuunnin</Link>
                    <br />
                    <Link to="/raha/alv-laskuri">ALV-laskuri</Link>
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