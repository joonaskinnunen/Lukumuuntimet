import React, {useState, useEffect} from 'react'
import { Breadcrumb } from 'react-bootstrap'
import Notification from '../Notification'
import { LinkContainer } from 'react-router-bootstrap'
import desimaalijarjestelma from '../../desimaali.png'
import binaarijarjestelma from '../../binaarijarjestelma.png'
import binaarilukutaulukko from '../../binaarilukutaulukko.png'

const BinToDecCon = () => {
    const [binary, setBinary] = useState('1010')
    const [decimal, setDecimal] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(binary)
        document.title = 'Binääri-desimaaliluku muunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        setBinary(value)
        if(validateBinary(value)) {
            setDecimal(convertBinToDec(value))
            if(value.length > 0) {
                setMessage(`${binary} on desimaalilukuna ${decimal}`)
                setErrorMessage('')
            } else {
                setMessage('')
                setErrorMessage('')
            }
        } else {
            setErrorMessage('Virheellinen binääriluku. Syötä ainoastaan numeroita 0 tai 1.')
            setMessage('')
        }
    }

    const validateBinary = (bin) => {
        for(let i = 0; i < bin.length; i++) {
            if(bin.charAt(i) !== '0' && bin.charAt(i) !== '1' && bin.charAt(i) !== ' ') {
                return false
            }
        }
        return true
    }

    const convertBinToDec = (bin) => {
        const convertedDecimal = parseInt((bin + '').replace(/[^01]/gi, ''), 2)
        return convertedDecimal
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
                Binääri-desimaaliluku muunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
            <h2>
            Binääri-desimaaliluku muunnin
            </h2>
            <p>Tällä muuntimella voit muuntaa binääriluvun niin sanotuksi normaaliksi luvuksi eli desimaaliluvuksi.</p>
            <div>
                <form>
                    <p>
                        <b>Syötä binääriluku:</b> <input value={binary} onChange={({target}) => handleChange(target.value)}>
                        </input>
                    </p>
                </form>
                <Notification message={message} result={decimal} errorMessage={errorMessage} />            </div>
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
            Lukujen painoarvot kasvaa vasemmalta oikealle 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 jne.<br />
            Yllä luetellut luvut saattaa näyttää hyvin tutuilta, koska ne tulevat jatkuvasti vastaan tietotekniikassa. 
            <img src={binaarijarjestelma} alt='Binäärilukujärjestelmä' style={{maxWidth: '100%'}}/>
            <br />
            
            </p>
        </div>
    )
}

export default BinToDecCon