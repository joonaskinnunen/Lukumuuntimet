import React, {useState, useEffect} from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import heksaluvut from '../../heksaluvut.png'

const DecToHexCon = () => {
    const [decimal, setDecimal] = useState('')
    const [hex, setHex] = useState('')
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
        console.log(hex)
        console.log(decimal)
        console.log(message)
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
            <h2 style={{maxWidth: '100%'}}>
            Desimaali-heksadesimaalimuunnin
            </h2>
            <div>
                <p>
                    Voit muuttaa tällä muuntimella numeron heksaluvuksi. Syötä alle muunnettava luku, niin näet muunnetun heksadesimaaliluvun.
                </p>
                <form>
                    <p>
                        Syötä luku: <input value={decimal} onChange={({target}) => handleChange(target.value)}>
                        </input>
                    </p>
                </form>
                <Notification message={message} result={hex} errorMessage={errorMessage} />
            </div>
            </div>
            <h4>Heksalukujärjestelmä</h4>
            <p>Heksajärjestelmässä kantalukuna on numero 16, joten järjestelmässä tarvitaan 16 eri numeromerkkiä: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.
            <br />
            Heksajärjestelmän kantaluku on suoraan numero 2:n potenssi eli <var>16=2<sup>4</sup></var>.
            <br />
            <img src={heksaluvut} alt="Heksaluvut, binääriluvut ja desimaaliluvut taulukko" style={{maxWidth: '80%', float: 'right', margin: '20px'}}/>
            Yksi heksajärjestelmän numero voidaan esittää 4-bittisellä binääriluvulla, ja 4-bittisellä binääriluvulla voi olla 16 erilaista tilaa, eli yksi 4-bittinen binääriluku vastaa yhtä heksajärjestelmän numeroa.
            Heksajärjestelmää voidaankin pitää lyhennysmerkintänä binaarijärjestelmän luvuille.<br />
            Heksaluvut merkitään lisäämällä heksaluvun perään tunnus H eli esimerkiksi luku 16 on heksalukuna 10H.
            </p>
        </div>
    )
}
export default DecToHexCon