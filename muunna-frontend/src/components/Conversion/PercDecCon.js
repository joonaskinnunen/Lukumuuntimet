import React, { useState, useEffect } from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

const PercDecCon = () => {
    const [decimal, setDecimal] = useState('10')
    const [percent, setPercent] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        document.title = 'Prosentti-Desimaalilukumuunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        value = value.replace(/,/g, '.')
        value = value.replace(/%/g, '')
        setPercent(value)
        setDecimal(value / 100)
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setMessage(`${value}% on desimaalilukuna ${value / 100}`)
        } else {
            setMessage('')
            setErrorMessage('')
        }
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
                    Prosentti-Desimaalilukumuunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h2>
                    Prosentti-Desimaalilukumuunnin
            </h2>
                <div className="calculator">
                    <p>Tällä laskimella / muuntimella voit muuttaa prosenttiluvun desimaaliluvuksi. Syötä prosenttiluku muuntimeen, niin muunnin näyttää luvun desimaalilukuna.</p>
                    <form>
                        <p>
                            Syötä luku: <input value={percent} onChange={({ target }) => handleChange(target.value)}>
                            </input>
                        </p>
                    </form>
                    {(percent && decimal) && <p><b>{percent}% / 100% = <span style={{ fontSize: '1.2em', color: '#155724' }}>{percent / 100}</span></b></p>}
                    <Notification message={message} result={decimal} errorMessage={errorMessage} />
                </div>
                <p>Voit muuntaa luvut toisinpäin <Link to="/yksikkomuuntimet/desimaali-prosenttilukumuunnin">Desimaali-prosenttilukumuuntimella</Link></p>
                <p>Katso myös <Link to="/matematiikka/prosenttilaskuri">prosenttilaskuri</Link>. Prosenttilaskurista löydät monia erilaisia prosenttilukuihin liittyviä laskureita.</p>
            </div>
            <h3>Prosenttiluvun muuttaminen desimaaliluvuksi</h3>
            <p>Prosenttiluvun muuttaminen desimaaliluvuksi on hyvin yksinkertaista.</p>
            <p>Kaava prosenttiluvun muuttamiseksi desimaaliluvuksi on: prosenttiluku / 100.
                </p>
            <p>
                Esimerkkejä prosentti-desimaali muunnoksista:
                <br />
                <span style={{ fontSize: '1.3em' }}>
                    1% = 1 / 100 = 0.01
                <br />
                5% = 5/100 = 0.05
                <br />
                10% = 10/100 = 0.1
                <br />
                35% = 35/100 = 0.35
                <br />
                50% = 50/100 = 0.5
                <br />
                100% = 100/100 = 1
                <br />
                350% = 350/100 = 3.5
                </span>
            </p>
        </div>
    )
}
export default PercDecCon