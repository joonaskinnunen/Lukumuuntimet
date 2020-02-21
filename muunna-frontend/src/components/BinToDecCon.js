import React, {useState, useEffect} from 'react'
import { Breadcrumb } from 'react-bootstrap'
import Notification from './Notification'

const BinToDecCon = () => {
    const [binary, setBinary] = useState('')
    const [decimal, setDecimal] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(binary)
        document.title = 'Binääri-desimaaliluku muunnin'
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
                <Breadcrumb.Item href="http://localhost:3000">Alkuun</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                Matematiikka
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                Binääri-desimaaliluku muunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
            <h2>
            Binääri-desimaaliluku muunnin
            </h2>
            <div>
                <form>
                    <p>
                        Syötä binääriluku: <input value={binary} onChange={({target}) => handleChange(target.value)}>
                        </input>
                    </p>
                </form>
                <Notification message={message} result={decimal} errorMessage={errorMessage} />            </div>
            </div>
        </div>
    )
}

export default BinToDecCon