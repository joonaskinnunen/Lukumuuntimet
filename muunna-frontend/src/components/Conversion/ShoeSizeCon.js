import React, { useEffect, useState } from 'react'
import { Breadcrumb, Table, Form } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import Notification from '../Notification'

const ShoeSizeCon = () => {

    const sizes = {
        eu: [35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 41, 42, 43, 44, 45, 46.5, 48.5],
        ukW: [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 9.5, 10.5, 11.5, 13],
        ukM: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 10, 11, 12, 13.5],
        usW: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 12, 13, 14, 15.5],
        usM: [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10.5, 11.5, 12.5, 14],
        cm: [22.8, 23.1, 23.5, 23.8, 24.1, 24.5, 24.8, 25.1, 25.4, 25.7, 26, 26.7, 27.3, 27.9, 28.6, 29.2],
        inch: [9, 9.1, 9.4, 9.4, 9.5, 9.6, 9.8, 9.9, 10, 10.1, 10.3, 10.5, 10.8, 11, 11.8, 11.5]
    }

    const [values, setValues] = useState({ unitFrom: 'eu', unitTo: 'usW', size: 35, index: 0, sizeOptions: sizes.eu, message: 'EU koko 35 vastaa US naisten kokoa 5' })

    useEffect(() => {
        document.title = 'Kengän koko-muunnin - Laske & Muunna'
    })

    const changeBackground = (e) => {
        e.target.style.background = '#4cdbc4'
    }

    const resetBackground = (e) => {
        e.target.style.background = 'transparent'
    }

    const onChangeSizeFrom = (e) => {
        console.log(e.target.value)
        const message = getMessage(e.target.value, values.unitFrom, values.unitTo, values.sizeOptions.indexOf(parseFloat(e.target.value)))
        setValues({ ...values, size: e.target.value, index: values.sizeOptions.indexOf(parseFloat(e.target.value)), message: message })
        //   setValues({...values, message: getMessage()})
        console.log(values)
        console.log(e.target.value)
        console.log(parseFloat(e.target.value))
        console.log(typeof (e.target.value))
        console.log(values.sizeOptions.indexOf(parseFloat(e.target.value)))
    }

    const onChangeUnitFrom = (e) => {
        console.log(e.target.value)
        const message = getMessage(sizes[e.target.value][0], e.target.value, values.unitTo, 0)
        setValues({ ...values, unitFrom: e.target.value, sizeOptions: sizes[e.target.value], message: message })
        //    setValues({...values, message: message}) */
        console.log(values)
        console.log(values.sizeOptions.indexOf(values.size))
    }

    const onChangeUnitTo = (e) => {
        console.log(e.target.value)
        const message = getMessage(sizes[values.unitFrom][0], values.unitFrom, e.target.value, 0)
        setValues({ ...values, unitTo: e.target.value, message: message })
    }

    const getMessage = (size, unitFrom, unitTo, index) => {
        let fromStr, toStr
        switch (unitFrom) {
            case "eu":
                fromStr = `EU koko ${size} vastaa `;
                break;
            case "usW":
                fromStr = `US naisten koko ${size} vastaa `;
                break;
            case "usM":
                fromStr = `US miesten koko ${size} vastaa `;
                break;
            case "ukM":
                fromStr = `UK miesten koko ${size} vastaa `;
                break;
            case "ukW":
                fromStr = `UK naisten koko ${size} vastaa `;
                break;
            case "cm":
                fromStr = `CM koko ${size} vastaa `;
                break;
            case "inch":
                fromStr = `Tuuma koko ${size} vastaa `;
                break;
            default:
                fromStr = '';
        }

        switch (unitTo) {
            case "eu":
                toStr = `EU kokoa ${sizes['eu'][index]}`;
                break;
            case "usW":
                toStr = `US naisten kokoa ${sizes['usW'][index]}`;
                break;
            case "usM":
                toStr = `US miesten kokoa ${sizes['usM'][index]}`;
                break;
            case "ukM":
                toStr = `UK miesten kokoa ${sizes['ukM'][index]}`;
                break;
            case "ukW":
                toStr = `UK naisten kokoa ${sizes['ukW'][index]}`;
                break;
            case "cm":
                toStr = `senttimeterinä kokoa ${sizes['cm'][index]}`;
                break;
            case "inch":
                toStr = `tuumakokoa ${sizes['inch'][index]}`;
                break;
            default:
                toStr = '';
        }

        return fromStr + toStr
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
                    Kengän koko-muunnin
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Kengän koko-muunnin
            </h2>
            <p>
                Alla olevalla muuntimella voit muuntaa kengän koon eri yksikköön. Esimerkiksi valitsemalla "Koko"-kentästä 40, "Muunna koosta"-kentästä EU ja "Kokoon"-kentästä US naiset, tulokseksi tulee "EU koko 40 vastaa US naisten kokoa 9".
                </p>
            <p>
                Voit myös katsoa kenkien kokotaulukosta kengän koon eri yksiköissä. Euroopassa käytetään kengissä kokomerkintää EU tai EUR. Yhdysvalloissa ja Kanadassa on käytössä US-merkintä. Englannissa taas käytetään UK-merkintää. US ja UK koot vaihtelevat myös miesten ja naisten kenkien välillä suhteessa eurooppalaisiin kokoihin. Taulukon pystyriviltä näet vastaavan kengän koon toisessa yksikössä.
                </p>
            <div className="calculator">
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Koko:</Form.Label>
                        <Form.Control as="select" onChange={onChangeSizeFrom} value={values.size}>
                            {values.sizeOptions.map((x, i) => <option key={i}>{x}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Muunna koosta:</Form.Label>
                        <Form.Control as="select" onChange={onChangeUnitFrom} value={values.unitFrom}>
                            <option value="eu">EU</option>
                            <option value="usW">US naiset</option>
                            <option value="usM">US miehet</option>
                            <option value="ukW">UK naiset</option>
                            <option value="ukM">UK miehet</option>
                            <option value="cm">CM</option>
                            <option value="inch">Tuumaa</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Kokoon:</Form.Label>
                        <Form.Control as="select" onChange={onChangeUnitTo}>
                            <option value="usW">US naiset</option>
                            <option value="usM">US miehet</option>
                            <option value="eu">EU</option>
                            <option value="ukW">UK naiset</option>
                            <option value="ukM">UK miehet</option>
                            <option value="cm">CM</option>
                            <option value="inch">Tuumaa</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Notification message={values.message} />
            </div>
            <Table responsive='sm' size='sm' className='table table-bordered table-hover text-center hoverCells' style={{ marginBottom: '50px' }}>
                <thead style={{ backgroundColor: 'rgb(216, 241, 230)' }}>
                    <tr>
                        <th colSpan={2}>Yksikkö</th>
                        <th colSpan={16}>Koko</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 'bold' }} colSpan={2}>EU</td>
                        {sizes.eu.map((x, i) => <td key={i} onMouseOver={changeBackground} onMouseLeave={resetBackground}>{x}</td>)}
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }} colSpan={2}>UK naiset</td>
                        {sizes.ukW.map((x, i) => <td key={i} onMouseOver={changeBackground} onMouseLeave={resetBackground}>{x}</td>)}
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }} colSpan={2}>UK miehet</td>
                        {sizes.ukM.map((x, i) => <td key={i} onMouseOver={changeBackground} onMouseLeave={resetBackground}>{x}</td>)}
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }} colSpan={2}>US naiset</td>
                        {sizes.usW.map((x, i) => <td key={i} onMouseOver={changeBackground} onMouseLeave={resetBackground}>{x}</td>)}
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }} colSpan={2}>US miehet</td>
                        {sizes.usM.map((x, i) => <td key={i} onMouseOver={changeBackground} onMouseLeave={resetBackground}>{x}</td>)}
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }} colSpan={2}>CM</td>
                        {sizes.cm.map((x, i) => <td key={i} onMouseOver={changeBackground} onMouseLeave={resetBackground}>{x}</td>)}
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }} colSpan={2}>Tuumaa</td>
                        {sizes.inch.map((x, i) => <td key={i} onMouseOver={changeBackground} onMouseLeave={resetBackground}>{x}</td>)}
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default ShoeSizeCon