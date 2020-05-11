import React, { useState, useEffect } from 'react'
import Notification from '../Notification'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const DecToOctCon = () => {
    const [decimal, setDecimal] = useState('10')
    const [oct, setOct] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-oktaalilukumuunnin - Laske & Muunna'
    })

    const handleChange = (value) => {
        setDecimal(value)
        setOct(convertDectoOct(decimal))
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setMessage(`${decimal} on oktaalilukuna ${oct}`)
        } else {
            setMessage('')
            setErrorMessage('')
        }
    }

    const convertDectoOct = (oct) => {
        if (oct < 0) {
            oct = 0xFFFFFFFF + oct + 1
        }
        return parseInt(oct, 10).toString(8)
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
                    Desimaali-oktaalilukumuunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h2>
                    Desimaali-oktaalilukumuunnin
            </h2>
                <div className="calculator">
                    <p>
                        Voit muuntaa tällä muuntimella niin sanotun normaalin desimaaliluvun oktaaliluvuksi. Syötä luku alla olevaan kenttään, niin näet luvun oktaalilukuna.
                </p>
                    <form>
                        <p>
                            Syötä luku: <input value={decimal} onChange={({ target }) => handleChange(target.value)}>
                            </input>
                        </p>
                    </form>
                    <Notification message={message} result={oct} errorMessage={errorMessage} />
                </div>
            </div>
        </div>
    )
}
export default DecToOctCon