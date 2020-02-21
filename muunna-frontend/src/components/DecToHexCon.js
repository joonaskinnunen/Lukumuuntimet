import React, {useState, useEffect} from 'react'
import { Alert } from 'react-bootstrap'
import Notification from './Notification'

const DecToHexCon = () => {
    const [decimal, setDecimal] = useState('')
    const [hex, setHex] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-heksadesimaali muunnin'
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

    const ResultDiv = () => {
        return (
            <Alert variant="success">
                <Alert.Heading>{hex}</Alert.Heading>
                <p>
                <b>{message}</b>
                </p>
            </Alert>
        )
        
    }

    const ErrorDiv = () => {
        return (
            <Alert variant="danger">
                <Alert.Heading>Virhe</Alert.Heading>
                <p>
                <b>{errorMessage}</b>
                </p>
            </Alert>
        )
        
    }

    return (
        <div>
            <div>
            <h2>
            Desimaali-heksadesimaali muunnin
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
                <resultDiv />
            </div>
            </div>
        </div>
    )
}
export default DecToHexCon