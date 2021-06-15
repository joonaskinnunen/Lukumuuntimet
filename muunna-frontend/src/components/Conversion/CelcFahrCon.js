import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Notification from '../Notification'
import { LinkContainer } from 'react-router-bootstrap'

const CelcFahrCon = () => {
    const [celcius, setCelcius] = useState('10')
    const [fahrenheit, setFahrenheit] = useState('10')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(celcius)
        document.title = 'Celsius-Fahrenheit-muunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        value = value.toString().replace(/,/g, '.')
        setCelcius(value)
        setFahrenheit((value * 1.8 + 32) + '℉')
        if (isNaN(value)) {
            setErrorMessage('Virheellinen luku. Syötä ainoastaan numeroita.')
            setMessage('')
        } else {
            if (value.length > 0) {
                setMessage(`${celcius}℃ on Fahrenheitteinä ${fahrenheit}`)
                setErrorMessage('')
            } else {
                setMessage('')
                setErrorMessage('')
            }
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
                    Celsius-Fahrenheit-muunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <div style={{ maxWidth: '90%' }}>
                    <h2>
                        Celsius-Fahrenheit-muunnin
            </h2>
                </div>
                <div className='calculator'>
                    <p>Tällä muuntimella voit muuntaa Celsiusasteet Fanhrenheiteiksi.</p>
                    <div>
                        <form>
                            <p>
                                <b>Syötä lämpötila °C:</b> <input value={celcius} onChange={({ target }) => handleChange(target.value)}>
                                </input>
                            </p>
                        </form>
                        <Notification message={message} result={fahrenheit} errorMessage={errorMessage} />
                        <p>Katso myös <Link to="./fahrenheit-celsius-muunnin">Fahrenheit-Celsius-muunnin</Link>.</p>
                    </div>
                </div>
            </div>
            <hr />
            <h4>Celsius-lämpötilan muuttaminen Fahrenheit-lämpötilaksi</h4>
            <p>Celsius-asteiden muuttaminen Fahrenheit-asteiksi onnistuu yksinkertaisella kaavalla: <b>°F = (°C) · 1,8 + 32</b>.
                <br />
                Esimerkkejä Celsius-Fahrenheit muunnoksista:
                </p>
                <ul>
                <li>10°C = 10°C * 1,8 + 32 = 50℉</li>
                <li>20°C = 20°C * 1,8 + 32 = 68℉</li>
                <li>50°C = 50°C * 1,8 + 32 = 122℉</li>
                <li>100°C = 100°C * 1,8 + 32 = 212℉</li>
                </ul>
        </div>
    )
}

export default CelcFahrCon