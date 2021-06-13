import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import Notification from '../Notification'

const LengthCon = () => {
    const [values, setValues] = useState({ millimeter: 10, centimeter: 1, inch: 0.393700787, meter: 0.01, kilometer: 0.00001, mail: 0.00001609, message: '', errorMessage: '' })

    useEffect(() => {
        document.title = 'Pituusmuunnin / etäisyysmuunnin - Laske & Muunna'
    })

    const handleChange = (obj) => {
        obj.value = obj.value.toString().replace(/,/g, '.')
        switch (obj.unit) {
            case 'mm': isNaN(obj.value) ? setValues({ ...values, millimeter: obj.value, centimeter: 0, inch: 0, kilometer: 0, meter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, millimeter: obj.value, centimeter: obj.value / 10, inch: obj.value * 0.0393700787, kilometer: obj.value / 1000000, meter: obj.value / 1000, mail: obj.value * 0.00000062137, errorMessage: '' })
                break
            case 'cm': isNaN(obj.value) ? setValues({ ...values, centimeter: obj.value, inch: 0, kilometer: 0, meter: 0, millimeter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, millimeter: obj.value * 10, centimeter: obj.value, inch: obj.value * 0.393700787, kilometer: obj.value / 100000, meter: obj.value / 100, mail: obj.value * 0.0000062137, errorMessage: '' })
                break
            case 'm': isNaN(obj.value) ? setValues({ ...values, meter: obj.value, inch: 0, kilometer: 0, millimeter: 0, centimeter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, meter: obj.value, millimeter: obj.value * 1000, centimeter: obj.value * 100, inch: obj.value * 100 * 0.393700787, kilometer: obj.value / 1000, mail: obj.value * 0.00062137, errorMessage: '' })
                break
            case 'km': isNaN(obj.value) ? setValues({ ...values, kilometer: obj.value, inch: 0, meter: 0, millimeter: 0, centimeter: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, kilometer: obj.value, centimeter: obj.value * 100000, inch: obj.value * 100000 * 0.393700787, meter: obj.value * 1000, millimeter: obj.value * 1000000, mail: obj.value * 0.62137, errorMessage: '' })
                break
            case 'inch': isNaN(obj.value) ? setValues({ ...values, inch: obj.value, meter: 0, millimeter: 0, centimeter: 0, kilometer: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, inch: obj.value, centimeter: obj.value * 2.54, meter: obj.value * 2.54 / 100, kilometer: obj.value * 2.54 / 100000, millimeter: obj.value * 25.4, mail: obj.value * 0.000015783, errorMessage: '' })
                break
            case 'mail': isNaN(obj.value) ? setValues({ ...values, mail: obj.value, meter: 0, millimeter: 0, centimeter: 0, kilometer: 0, errorMessage: 'Virheellinen luku' }) : setValues({ ...values, mail: obj.value, centimeter: obj.value * 1.609344 * 100000, meter: obj.value * 1.609344 * 1000, kilometer: obj.value * 1.609344, millimeter: obj.value * 1.609344 * 1000000, inch: obj.value * 63360.23622, errorMessage: '' })
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
                    Syötä arvo johonkin alla olevan laskurin kentistä. Laskuri näyttää muiden yksiköiden muunnetut arvot. Voit muuntaa muuntimella esimerkiksi senttimetrit tuumiksi, millimetrit kilometreiksi, mailit kilometreiksi tai toisinpäin.
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
                <label><b>Maili:</b></label>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={({ target }) => handleChange({ unit: 'mail', value: target.value })}
                        value={values.mail || ''}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>maili</InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
                <Notification message={values.message} errorMessage={values.errorMessage} />
            </div>
            <h4>Esimerkkejä pituusyksiköiden muuntamisesta toiseen</h4>
            <p>Pituuden SI-järjestelmän mukainen perusyksikkö on metri. Esimerkiksi metrien muuttaminen kilometreiksi tai senttimetreiksi on monelle luonnostaan helppoa omassa päässä ilman laskinta. Kuitenkin metrien muuttaminen esimerkiksi tuumiksi tai maileiksi voi olla haastavampaa. Alla muutamia yleisimpiä kaavoja pituusyksiköiden muuntamisesta toiseen</p>
            <h5>Mailit kilometreiksi</h5>
            <p>Yksi maili on 1,609 km. Yksi kilometri on 0,621 mailia.</p>
            <p>Mailit muutetaan kilometreiksi kaavalla: kilometrit * 1,609</p>
            <p>
                1 mi = 1 * 1,609 = 1,61 km
            <br />
                2 mi = 2 * 1,609 = 3,22 km
            <br />
                5 mi = 5 * 1,609 = 8,05 km
            <br />
                157 mi = 157 * 1,609 = 252,67 km
                </p>
            <h5>Kilometrit maileiksi</h5>
            <p>Kilometrit muutetaan maileiksi kaavalla: kilometrit * 0,621</p>
            <p>
                1 km = 1 * 0,621 = 0,621 mi
            <br />
                2 km = 2 * 0,621 = 1,243 mi
            <br />
                5 km = 5 * 0,621 = 3,107 mi
            <br />
                157 km = 157 * 0,621 = 97,555 mi
                </p>
            <h5>Tuumat metreiksi</h5>
            <p>Tuumat muutetaan metreiksi kaavalla: tuumat * 0,0254</p>
            <p>
                1 in = 1 * 0,0254 = 0,0254 m
            <br />
                2 in = 2 * 0,0254 = 0,051 m
            <br />
                5 in = 5 * 0,0254 = 0,127 m
            <br />
                157 in = 1 * 0,0254 = 3,988 m
                </p>
            <h5>Metrit tuumiksi</h5>
            <p>Metrit muutetaan tuumiksi kaavalla: metrit * 39,37</p>
             <p>   1 m = 1 * 39,37 = 39,37 in
            <br />
                2 m = 2 * 39,37 = 78,74 in
            <br />
                5 m = 5 * 39,37 = 196,85 in
            <br />
                157 m = 157 * 39,37 = 6181,1 in
                </p>
        </div>
    )
}

export default LengthCon