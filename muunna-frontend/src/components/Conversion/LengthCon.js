import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import Notification from '../Notification'

const LengthCon = () => {
    const [values, setValues] = useState({ millimeter: 10, centimeter: 1, inch: 0.393700787, meter: 0.01, kilometer: 0.00001, message: '', errorMessage: '' })

    useEffect(() => {
        document.title = 'Pituusmuunnin / etäisyysmuunnin - Laske & Muunna'
    })

    const handleChange = (obj) => {
        obj.value = obj.value.toString().replace(/,/g, '.')
        switch (obj.unit) {
            case 'mm': isNaN(obj.value) ? setValues({ ...values, millimeter: obj.value, centimeter: 0, inch: 0, kilometer: 0, meter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, millimeter: obj.value, centimeter: obj.value / 10, inch: obj.value * 0.0393700787, kilometer: obj.value / 1000000, meter: obj.value / 1000, errorMessage: '' })
                break
            case 'cm': isNaN(obj.value) ? setValues({ ...values, centimeter: obj.value, inch: 0, kilometer: 0, meter: 0, millimeter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, millimeter: obj.value * 10, centimeter: obj.value, inch: obj.value * 0.393700787, kilometer: obj.value / 100000, meter: obj.value / 100, errorMessage: '' })
                break
            case 'm': isNaN(obj.value) ? setValues({ ...values, meter: obj.value, inch: 0, kilometer: 0, millimeter: 0, centimeter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, meter: obj.value, millimeter: obj.value * 1000, centimeter: obj.value * 100, inch: obj.value * 100 * 0.393700787, kilometer: obj.value / 1000, errorMessage: '' })
                break
            case 'km': isNaN(obj.value) ? setValues({ ...values, kilometer: obj.value, inch: 0, meter: 0, millimeter: 0, centimeter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, kilometer: obj.value, centimeter: obj.value * 100000, inch: obj.value * 100000 * 0.393700787, meter: obj.value * 1000, millimeter: obj.value * 1000000, errorMessage: '' })
                break
            case 'inch': isNaN(obj.value) ? setValues({ ...values, inch: obj.value, meter: 0, millimeter: 0, centimeter: 0, kilometer: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, inch: obj.value, centimeter: obj.value * 2.54, meter: obj.value * 2.54 / 100, kilometer: obj.value * 2.54 / 100000, millimeter: obj.value * 25.4, errorMessage: '' })
                break
            default: setValues({ millimeter: 10, centimeter: 1, inch: 0.393700787, meter: 0.01, kilometer: 0.00001, message: '', errorMessage: '' })

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
                    Pituusmuunnin / etäisyysmuunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Pituusmuunnin / etäisyysmuunnin
            </h2>
            <div className="calculator">
                <p>
                    Syötä arvo johonkin alla olevan laskurin kentistä. Laskuri näyttää muiden yksiköiden muunnetut arvot. Voit muuntaa muuntimella esimerkiksi senttimetrit tuumiksi, millimetrit kilometreiksi tai toisinpäin.
            </p>
                <Notification message={values.message} errorMessage={values.errorMessage} />
                <label><b>Millimetri:</b></label>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={({ target }) => handleChange({ unit: 'mm', value: target.value })}
                        value={values.millimeter || ''}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>mm</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
                <label><b>Senttimetri:</b></label>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={({ target }) => handleChange({ unit: 'cm', value: target.value })}
                        value={values.centimeter || ''}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>cm</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
                <label><b>Metri:</b></label>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={({ target }) => handleChange({ unit: 'm', value: target.value })}
                        value={values.meter || ''}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>m</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
                <label><b>Kilometri:</b></label>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={({ target }) => handleChange({ unit: 'km', value: target.value })}
                        value={values.kilometer || ''}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>km</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
                <label><b>Tuuma:</b></label>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={({ target }) => handleChange({ unit: 'inch', value: target.value })}
                        value={values.inch || ''}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>tuuma</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
                <Notification message={values.message} errorMessage={values.errorMessage} />
            </div>
        </div>
    )
}

export default LengthCon