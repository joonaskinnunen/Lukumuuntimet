import React, {useState, useEffect} from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import desimaalijarjestelma from '../../desimaali.png'
import binaarijarjestelma from '../../binaarijarjestelma.png'
import binaarilukutaulukko from '../../binaarilukutaulukko.png'

const DecToBinCon = () => {
    const [decimal, setDecimal] = useState('10')
    const [binary, setBinary] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-binäärilukumuunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        setDecimal(value)
        setBinary(convertDectoBin(decimal))
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setMessage(`${decimal} on binäärilukuna ${binary}`)
        } else {
            setMessage('')
            setErrorMessage('')
        }
    }

    const convertDectoBin = (dec) => {
        if (dec < 0) {
            dec = 0xFFFFFFFF + dec + 1
        }
        return parseInt(dec, 10).toString(2);
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
                Desimaaliluku-binäärilukumuunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
            <h2>
            Desimaali-binäärilukumuunnin
            </h2>
            <div>
                <form>
                    <p>
                        Syötä luku: <input value={decimal} onChange={({target}) => handleChange(target.value)}>
                        </input>
                    </p>
                </form>
                <Notification message={message} result={binary} errorMessage={errorMessage} />
                <p>Katso myös <a href="./binaari-desimaali-muunnin">binääri-desimaalilukumuunnin</a>.</p>
            </div>
            </div>
            <hr />
            <h4>Desimaalijärjestelmä</h4>
            <p>Normaalisti käytämme arkielämässä normaalia 10-numeroista lukujärjestelmää (luvut 0-9), eli desimaalijärjestelmää.<br /> Numeron paikka luvussa on merkitsevä ja kullakin numerolla on erilainen painoarvo sen mukaan, mikä on numeron sijainti
            luvussa. Numeroiden painoarvot kasvavat oikealta vasemmalle: 1, 10, 100, 1000, 10000... <br />10 numerojärjestelmässä kantaluku on 10 ja numeroiden painoarvot saadaan kantaluvun potensseista: <var>1=10<sup>0</sup>, 10=10<sup>1</sup>, 100=10<sup>2</sup>, 1 000=10<sup>3</sup>, 10 000=10<sup>4</sup></var>
            <img src={desimaalijarjestelma} alt='Desimaaliluku' style={{maxWidth: '100%'}}/>
            <h4>Binäärijärjestelmä</h4>
            Binäärijärjestelmä on teknisesti yksinkertaisin lukujärjestelmä. Binäärijärjestelmä on kaksijärjestelmä, jossa tarvitaan vain kahta numeroa: 0 ja 1.
            <img src={binaarilukutaulukko} alt='Binäärilukutaulukko' style={{maxWidth: '100%', float: 'right', margin: '20px'}}/>
            <br />
            Tietokoneiden on vaikeaa käyttää 10-numerojärjestelmää merkkimäärän vuoksi, joten tietokoneiden toiminta perustuukin yksinkertaisempaan binäärijärjestelmään. Binääriluvuilla on helppo esittää erilaisia ilmiöitä, kuten: sähkö kulkee / ei kulje, ovi on auki / kiinni, toimii / ei toimi ja niin edelleen.
            <br />
            Binäärilukujärjestelmässä lukujen painoarvot saadaan kantaluvun (2) potensseina, samalla tavalla kuin 10-järjestelmässä.<br />
            <var>1=2<sup>0</sup>, 2=2<sup>1</sup>, 4=2<sup>2</sup>, 8=2<sup>3</sup>, 16=2<sup>4</sup>, 32=2<sup>5</sup>, 64=2<sup>6</sup></var><br />
            Lukujen painoarvot kasvaa oikealta vasemmalle: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 jne.<br />
            Yllä luetellut luvut saattaa näyttää hyvin tutuilta, koska ne tulevat jatkuvasti vastaan tietotekniikassa.
            <br />
            Binääriluku saadaan kerrottua helposti kahdella lisäämällä 0 luvun perään, eli esimerkiksi 1010B on desimaalilukuna 10 ja 10100B on desimaalilukuna 20.
            <img src={binaarijarjestelma} alt='Binäärilukujärjestelmä' style={{maxWidth: '100%'}}/>
            <br />
            
            </p>
        </div>
    )
}
export default DecToBinCon