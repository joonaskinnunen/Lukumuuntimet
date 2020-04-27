import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import Notification from '../Notification'

const PercentCalc = () => {
    const [values, setValues] = useState({num: '', percent: ''})
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        document.title = 'Prosenttilaskuri - Laske & Muunna'
    })

    const handlePercentChange = (value) => {
        value = value.replace(/,/g, '.')
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setValues({...values, percent: value})
            values.num.length > 0 ? setMessage(`${value}% luvusta ${values.num} on ${values.num * value / 100}`) : setMessage("Syötä molemmat luvut")
        } else {
            setMessage('')
            setErrorMessage('')
            setValues({...values, percent: ''})
        }
    }

    const handleNumberChange = (value) => {
        value = value.replace(/,/g, '.')
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setValues({...values, num: value})
            values.percent.length > 0 ? setMessage(`${values.percent}% luvusta ${value} on ${value * values.percent / 100}`) : setMessage("Syötä molemmat luvut")
        } else {
            setMessage('')
            setErrorMessage('')
            setValues({...values, num: ''})
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
                        Matematiikka
                    </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                        Prosenttilaskuri
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Prosenttilaskuri
            </h2>
            <p>
                Syötä luku ja prosenttiosuus. Laskuri näyttää prosenttiosuuden lukuna annetuista prosenttiluvusta ja luvusta.
            </p>
            <label><b>Luku:</b></label>
            <InputGroup className="mb-3">
                <FormControl
                onChange={({target}) => handleNumberChange(target.value)}
                />
                <InputGroup.Prepend>
                    <InputGroup.Text>123</InputGroup.Text>          
                </InputGroup.Prepend>
            </InputGroup>
            <label><b>Prosenttiosuus:</b></label>
            <InputGroup className="mb-3">
                <FormControl
                onChange={({target}) => handlePercentChange(target.value)}
                />
                <InputGroup.Prepend>
                    <InputGroup.Text>%</InputGroup.Text>        
                </InputGroup.Prepend>
            </InputGroup>
            <Notification message={message} result={values.result} errorMessage={errorMessage} />
        </div>
    )
}

export default PercentCalc