import React, { useState, useEffect } from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"
import ConversionTable from './ConverisionTable'

const DecToHexCon = () => {
    const [decimal, setDecimal] = useState('10')
    const [hex, setHex] = useState('A')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-heksadesimaali muunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        setDecimal(value)
        setHex(convertDectoHex(decimal).toUpperCase())
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
            setMessage('')
        } else if (value.length !== 0) {
            setErrorMessage('')
            setMessage(`${decimal} on heksalukuna ${hex}`)
        } else {
            setMessage('')
            setErrorMessage('')
        }
    }

    const convertDectoHex = (dec) => {
        if (dec < 0) {
            dec = 0xFFFFFFFF + dec + 1
        }
        return parseInt(dec, 10).toString(16);
    }

    return (
        <div>
            <Breadcrumb>
                <LinkContainer to="../">
                    <Breadcrumb.Item>
                        Alkuun
                </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to="./">
                    <Breadcrumb.Item>
                        Yksikkömuuntimet
                </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                    Desimaali-heksadesimaalimuunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h2 style={{ maxWidth: '100%' }}>
                    Desimaali-heksadesimaalimuunnin
            </h2>
                <p>
                    Heksadesimaalimuunnin on muunnin jolla voit muuttaa "normaalin" desimaaliluvun heksadesimaaliluvuksi.
            </p>
                <div className="calculator">
                    <p>
                        Voit muuttaa tällä heksadesimaalimuuntimella numeron heksaluvuksi. Syötä alle muunnettava luku, niin näet muunnetun heksadesimaaliluvun.
                </p>
                    <form>
                        <p>
                            Syötä luku: <input value={decimal} onChange={({ target }) => handleChange(target.value)}>
                            </input>
                        </p>
                    </form>
                    <Notification message={message} result={hex} errorMessage={errorMessage} />
                </div>
            </div>
            <h4>Heksalukujärjestelmä</h4>
            <p>Heksajärjestelmässä kantalukuna on numero 16, joten järjestelmässä tarvitaan 16 eri numeromerkkiä: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.
            </p>
            <ConversionTable />
            <p>
                <br />
            Heksajärjestelmän kantaluku on suoraan numero 2:n potenssi eli <var>16=2<sup>4</sup></var>.
            <br />
            Heksalukuja käytetään yleisesti tietotekniikassa, koska yksi heksajärjestelmän numero voidaan esittää 4-bittisellä binääriluvulla, ja 4-bittisellä binääriluvulla voi olla 16 erilaista tilaa, eli yksi 4-bittinen binääriluku vastaa yhtä heksajärjestelmän numeroa.
            <br />
            Näin esimerkiksi 8-bittisen tavun arvo voidaan ilmaista kahden merkin pituisella heksadesimaaliluvulla.
            Heksajärjestelmää voidaankin pitää lyhennysmerkintänä binaarijärjestelmän luvuille.<br />
            Heksaluvut merkitään lisäämällä heksaluvun perään tunnus H eli esimerkiksi luku 16 on heksalukuna 10H.
            </p>
            <p>
                Ohjelmoinnissa heksadesimaaliluvut merkitään ohjelmointikielestä riippuen eri tavalla.
                Heksadesimaaliluvut erotetaan desimaaliluvuista muun muassa seuraavin tavoin:
            </p>
            <ul>
                <li>\xAB</li>
                <li>0xCD (esimerkiksi C johdannaisineen)</li>
                <li>xEF</li>
                <li>$1A</li>
                <li>BC$</li>
                <li>&amp;HDE</li>
                <li>16h</li>
                <li>x'40'</li>
                <li>'00'x</li>
                <li>#F3</li>
            </ul>
            <h4>Desimaaliluvun muuttaminen heksadesimaaliluvuksi</h4>
            <p>
                Alla olevassa listassa lukujärjestelmä on ilmoitettu numeron alaindeksillä.
            </p>
                <ul>
                    <li>12<sub>10</sub> = C<sub>16</sub></li>
                    <li>18<sub>10</sub> = 12<sub>16</sub></li>
                    <li>30<sub>10</sub> = 1E<sub>16</sub></li>
                    <li>140<sub>10</sub> = 8C<sub>16</sub></li>
                    <li>289<sub>10</sub> = 121<sub>16</sub></li>
                </ul>
                <h4>Heksaluvun muuttaminen desimaaliluvuksi</h4>
                <ul>
                    <li>E<sub>16</sub> = (14 * 16<sup>0</sup>) = 14</li>
                    <li>51<sub>16</sub> = (5 * 16<sup>1</sup>) + (1 * 16<sup>0</sup>) = 81</li>
                    <li>1AD<sub>16</sub> = (1 * 16<sup>2</sup>) + (10 * 16<sup>1</sup>) + (13 * 16<sup>0</sup>) = 429</li>
                </ul>
            <p>
                Katso myös: <Link to="./desimaali-binaari-muunnin">desimaali-binäärilukumuunnin</Link> ja <Link to="./desimaali-oktaaliluku-muunnin">desimaali-oktaalilukumuunnin</Link>
            </p>
        </div>
    )
}
export default DecToHexCon