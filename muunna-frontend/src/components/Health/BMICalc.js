import React, { useState , useEffect} from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const BMICalc = () => {
    const [values, setValues] = useState({ weight: 70, height: 180, bmi: 20 })

    useEffect(() => {
        document.title = 'Painoindeksilaskuri - Laske & Muunna'
    })

    const handleHeightChange = (value) => {
        value = value.replace(/,/g, '.')
        setValues({ ...values, height: value, bmi: values.weight / (value / 100) / (value / 100) })
    }

    const handleWeightChange = (value) => {
        value = value.replace(/,/g, '.')
        setValues({ ...values, weight: value, bmi: value / (values.height / 100) / (values.height / 100) })
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
                        Terveys
                    </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                    Painoindeksilaskuri
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Painoindeksilaskuri
            </h2>
            <p>
                Syötä laskuriin pituutesi ja painosi. Laskuri näyttää painoindeksin, painoluokan ja miten suuri riski sinulla on sairastua vakavasti painon vuoksi.
            </p>
            <label><b>Pituus:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>CM</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={({ target }) => handleHeightChange(target.value)}
                    value={values.height}
                />
            </InputGroup>
            <label><b>Paino:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>KG</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={({ target }) => handleWeightChange(target.value)}
                    value={values.weight}
                />
            </InputGroup>
            <h3>Painoindeksisi on {Math.round((values.bmi + Number.EPSILON) * 100) / 100}</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Paino kategoria</th>
                        <th scope="col">Painoindeksi (BMI)</th>
                        <th scope="col">Terveysriski</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={values.bmi < 18.5 ? "table-active" : void 0}>
                        <td>Alipaino</td>
                        <td>18.4 ja alle</td>
                        <td>Aliravitsemus riski</td>
                    </tr>
                    <tr className={values.bmi < 25 && values.bmi > 18.4 ? "table-active" : void 0}>
                        <td>Normaali paino</td>
                        <td>18.5 - 24.9</td>
                        <td>Matala riski</td>
                    </tr>
                    <tr className={values.bmi > 24.9 && values.bmi < 30 ? "table-active" : void 0}>
                        <td>Ylipaino</td>
                        <td>25 - 29.9</td>
                        <td>Kohonnut riski</td>
                    </tr>
                    <tr className={values.bmi > 29.9 && values.bmi < 35 ? "table-active" : void 0}>
                        <td>Merkittävä ylipaino</td>
                        <td>30 - 34.9</td>
                        <td>Keskivakava riski</td>
                    </tr>
                    <tr className={values.bmi > 34.9 && values.bmi < 40 ? "table-active" : void 0}>
                        <td>Vaikea ylipaino</td>
                        <td>35 - 39.9</td>
                        <td>Korkea riski</td>
                    </tr>
                    <tr className={values.bmi > 40 ? "table-active" : void 0}>
                        <td>Sairaalloinen ylipaino</td>
                        <td>40 ja yli</td>
                        <td>Erittäin korkea riski</td>
                    </tr>
                </tbody>
            </table>
            <h3>Painoindeksin laskeminen</h3>
            <p>
            Painoindeksi, eli BMI / Body Mass Index = paino kilogrammoina / pituus korotettuna toiseen potenssiin (metreinä).
            <br />
            <span style={{ fontWeight: 'bold' }}>
            <var>Painoindeksi<sup style={{bottom: '-.25em', top: 'initial'}}>(kg/m<sup>2</sup>)</sup> = paino<sup style={{bottom: '-.25em', top: 'initial'}}>(kg)</sup> / pituus<sup>2</sup><sup style={{bottom: '-.25em', top: 'initial'}}>(m)</sup>.</var>
            </span>
            <br />
            </p>
            <p>
            Esimerkiksi 80 kiloa painavan ja 180 senttiä pitkän henkilön painoindeksi lasketaan kaavalla:
            <br />
            <span style={{ fontWeight: 'bold' }}>
            <var>Painoindeksi<sup style={{bottom: '-.25em', top: 'initial'}}>(kg/m<sup>2</sup>)</sup> = 80<sup style={{bottom: '-.25em', top: 'initial'}}>(kg)</sup> / 1.8<sup>2</sup><sup style={{bottom: '-.25em', top: 'initial'}}>(m)</sup> = 24.69</var>
            </span>
            </p>
        </div>
    )
}

export default BMICalc