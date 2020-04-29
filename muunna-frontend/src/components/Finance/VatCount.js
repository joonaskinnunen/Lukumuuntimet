import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const VatCount = () => {
    const [vatPercent, setVatPercent] = useState(24)
    const [valueWithoutTax, setValueWithoutTax] = useState(100)
    const [valueWithTax, setValueWithTax] = useState(124)

    useEffect(() => {
        document.title = 'ALV-laskuri - Laske & Muunna'
    })

    const handleValueChange = (value) => {
        value = value.replace(/,/g, '.')
        setValueWithoutTax(value)
        setValueWithTax(value * (1 + vatPercent / 100))
    }

    const handleValueWithTaxChange = (value) => {
        value = value.replace(/,/g, '.')
        setValueWithTax(value)
        setValueWithoutTax(value / (1 + vatPercent / 100))
    }

    const handleVatChange = (value) => {
        value = value.replace(/,/g, '.')
        setVatPercent(value)
        setValueWithoutTax(valueWithTax / (1 + value / 100))

    }

    return (
        <div>
            <Breadcrumb>
                <LinkContainer to="../../">
                    <Breadcrumb.Item>
                        Alkuun
                    </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to="../">
                    <Breadcrumb.Item>
                        Raha ja talous
                    </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                    ALV-laskuri
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                ALV-laskuri
            </h2>
            <p>
                Syötä laskuriin arvonlisäverollinen tai veroton hinta ja alv-prosentti. Laskuri näyttää verollisen ja verottoman hinnan ja lisäksi arvonlisäveron määrän.
            </p>
            <label><b>Veroton hinta:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>€</InputGroup.Text>          
                </InputGroup.Prepend>
                <FormControl
                onChange={({target}) => handleValueChange(target.value)}
                value={valueWithoutTax}
                />
            </InputGroup>
            <label><b>Verollinen hinta:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>€</InputGroup.Text>        
                </InputGroup.Prepend>
                <FormControl
                onChange={({target}) => handleValueWithTaxChange(target.value)}
                value={valueWithTax}
                />
            </InputGroup>
            <label><b>Arvonlisäveroprosentti:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>%</InputGroup.Text>        
                </InputGroup.Prepend>
                <FormControl
                onChange={({target}) => handleVatChange(target.value)}
                value={vatPercent}
                />
            </InputGroup>
            <p><b>ALV määrä: {Math.round((valueWithTax-valueWithoutTax + Number.EPSILON) * 100) / 100}€</b></p>
        </div>
    )
}

export default VatCount