import React, { useState, useEffect } from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

const PercDecCon = () => {
    const [decimal, setDecimal] = useState('')
    const [percent, setPercent] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        document.title = 'Desimaali-prosenttilukumuunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        value = value.replace(/,/g, '.')
        value = value.replace(/%/g, '')
        setDecimal(value)
        setPercent(value * 100)
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole desimaaliluku')
        } else if (value.length !== 0) {
            setMessage(`${value} on prosenttilukuna ${value * 100}%`)
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
                    Desimaali-prosenttilukumuunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h2>
                    Desimaali-prosenttilukumuunnin
            </h2>
                <div className="calculator">
                    <p>Tällä laskimella / muuntimella voit muuttaa desimaaliluvun prosenttiluvuksi. Syötä desimaaliluku muuntimeen, niin muunnin näyttää luvun prosenttilukuna.</p>
                    <form>
                        <p>
                            Syötä luku: <input value={decimal} onChange={({ target }) => handleChange(target.value)}>
                            </input>
                        </p>
                    </form>
                    {(decimal && percent) && <p><b>{decimal} * 100 = <span style={{ fontSize: '1.2em', color: '#155724' }}>{decimal * 100}%</span></b></p>}
                    <Notification message={message} result={decimal} errorMessage={errorMessage} />
                </div>
                <p>Voit muuntaa luvut toisinpäin <Link to="/yksikkomuuntimet/prosentti-desimaalimuunnin">Prosentti-desimaalilukumuuntimella</Link></p>
                <p>Katso myös <Link to="/matematiikka/prosenttilaskuri">prosenttilaskuri</Link>. Prosenttilaskurista löydät monia erilaisia prosenttilukuihin liittyviä laskureita.</p>
            </div>
            <h3>Desimaaliluvun muuttaminen prosenttiluvuksi</h3>
            <p>Desimaaliluvun muuttaminen prosenttiluvuksi on hyvin yksinkertaista.</p>
            <p>Kaava desimaaliluvun muuttamiseksi prosenttiluvuksi on: desimaaliluku * 100.
                </p>
            <p>
                Esimerkkejä desimaali-prosentti muunnoksista:
                <br />
                <span style={{ fontSize: '1.3em' }}>
                0,1 = 0,1 * 100 = 10%
                <br />
                0,2 = 0,2 * 100 = 20%
                <br />
                0,5 = 0,5 * 100 = 50%
                <br />
                0,7 = 0,7 * 100 = 70%
                <br />
                1 = 1 * 100 = 100%
                <br />
                1,5 = 1,5 * 100 = 150%
                <br />
                3 = 3 * 100 = 300%
                </span>
            </p>
        </div>
    )
}
export default PercDecCon