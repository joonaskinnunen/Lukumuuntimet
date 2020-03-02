import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const LengthCon = () => {
    const [values, setValues] = useState({cm: 0, inch: 0})

    useEffect(() => {
        document.title = 'Pituusmuunnin / etäisyysmuunnin - Laske & Muunna'
    })

    const handleCmChange = (value) => {
        setValues({...values, cm: value, inch: value * 0.393700787})
    }

    const handleInchChange = (value) => {
        setValues({...values, inch: value, cm: value * 2.54})
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
                        Pituusmuunnin / etäisyysmuunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Pituusmuunnin / etäisyysmuunnin
            </h2>
            <p>
                Syötä arvo johonkin alla olevan laskurin kentistä. Laskuri näyttää muiden yksiköiden muunnetut arvot.
            </p>
            <label><b>Senttimetri (cm):</b></label>
            <InputGroup className="mb-3">
                <FormControl
                onChange={({target}) => handleCmChange(target.value)}
                value={values.cm}
                />
                <InputGroup.Prepend>
                    <InputGroup.Text>cm</InputGroup.Text>          
                </InputGroup.Prepend>
            </InputGroup>
            <label><b>Tuuma:</b></label>
            <InputGroup className="mb-3">
                <FormControl
                onChange={({target}) => handleInchChange(target.value)}
                value={values.inch}
                />
                <InputGroup.Prepend>
                    <InputGroup.Text>tuuma</InputGroup.Text>        
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )
}

export default LengthCon