import React, {useState, useEffect} from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

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
            <h2>
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
        </div>
    )
}
export default DecToHexCon