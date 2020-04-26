import React, {useState, useEffect} from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const DecToBinCon = () => {
    const [decimal, setDecimal] = useState('')
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
            </div>
            </div>
        </div>
    )
}
export default DecToBinCon