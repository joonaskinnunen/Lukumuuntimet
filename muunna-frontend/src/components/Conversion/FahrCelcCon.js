import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Notification from '../Notification'
import { LinkContainer } from 'react-router-bootstrap'

const CelcFahrCon = () => {
    const [celcius, setCelcius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('10')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(fahrenheit)
        document.title = 'Fahrenheit-Celsius-muunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        value = value.toString().replace(/,/g, '.')
        setFahrenheit(value)
        setCelcius((value * 1.8 + 32) + '℃')
        if (isNaN(value)) {
            setErrorMessage('Virheellinen luku. Syötä ainoastaan numeroita.')
            setMessage('')
        } else {
            if (value.length > 0) {
                setMessage(`${fahrenheit}℉ on Celsius-asteina ${celcius}`)
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
                Fahrenheit-Celsius-muunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <div style={{ maxWidth: '90%' }}>
                    <h2>
                        Fahrenheit-Celsius-muunnin
            </h2>
                </div>
                <div className='calculator'>
                    <p>Tällä muuntimella voit muuntaa Fanhrenheit-asteet Celsius-asteiksi.</p>
                    <div>
                        <form>
                            <p>
                                <b>Syötä lämpötila °F:</b> <input value={fahrenheit} onChange={({ target }) => handleChange(target.value)}>
                                </input>
                            </p>
                        </form>
                        <Notification message={message} result={celcius} errorMessage={errorMessage} />
                        <p>Katso myös <Link to="./celsius-fahrenheit-muunnin">Celsius-Fahrenheit-muunnin</Link>.</p>
                    </div>
                </div>
            </div>
            <hr />
            <h4>Fahrenheit-lämpötilan muuttaminen Celsius-lämpötilaksi</h4>
            <p>Fahrenheit-asteiden muuttaminen Celsius-asteiksi onnistuu yksinkertaisella kaavalla: <b>°C = (°F − 32) / 1,8</b>.
                <br />
                Esimerkkejä Fahrenheit-Celsius muunnoksista:
                </p>
                <ul>
                <li>50°F = (50°F − 32) / 1,8 = 10°C</li>
                <li>70°F = (70°F − 32) / 1,8 = 21,1°C</li>
                <li>100°F = (100°F − 32) / 1,8 = 37,77°C</li>
                <li>150°F = (150°F − 32) / 1,8 = 65,55°C</li>
                </ul>
        </div>
    )
}

export default CelcFahrCon