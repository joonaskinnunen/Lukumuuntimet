import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import Notification from '../Notification'

const PercentCalc = () => {
    const [values, setValues] = useState({num: '', percent: '', percentCalc: {firstNum: '', secondNum: ''}})
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [percentCalcMessage, setPercentCalcMessage] = useState('')
    const [percentCalcErrorMessage, setPercentCalcErrorMessage] = useState('')

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

    const handlePercentCalcFirstNumChange = (value) => {
        value = value.replace(/,/g, '.')
        if (isNaN(value)) {
            setPercentCalcErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setValues({...values, percentCalc: {...values.percentCalc, firstNum: value}})
            values.percentCalc.secondNum.length > 0 ? setPercentCalcMessage(`${value} luvusta ${values.percentCalc.secondNum} on ${(value / values.percentCalc.secondNum) * 100}%`) : setPercentCalcMessage("Syötä molemmat luvut")
        } else {
            setPercentCalcMessage('')
            setPercentCalcErrorMessage('')
            setValues({...values, percentCalc: {...values.percentCalc, firstNum: ''}})
        }
    }

    const handlePercentCalcSecondNumChange = (value) => {
        value = value.replace(/,/g, '.')
        if (isNaN(value)) {
            setPercentCalcErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setValues({...values, percentCalc: {...values.percentCalc, secondNum: value}})
            values.percentCalc.firstNum.length > 0 ? setPercentCalcMessage(`${values.percentCalc.firstNum} luvusta ${value} on ${(values.percentCalc.firstNum / value) * 100}%`) : setPercentCalcMessage("Syötä molemmat luvut")
        } else {
            setPercentCalcMessage('')
            setPercentCalcErrorMessage('')
            setValues({...values, percentCalc: {...values.percentCalc, secondNum: ''}})
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
                Prosenttilaskureilla voit laskea erilaisia prosenttilukuihin liittyviä laskutoimituksia.
            </p>
            <p>
                Voit esimerkiksi laskea miten paljon luku muuttuu, kun lukua kasvatetaan tai pienennetään tietyllä prosenttimäärällä.
                <br />
                Voit myös laskea tiettyä prosenttilukua vastaavan luvun annetusta luvusta.
            </p>
            <div className='calculator'>
            <h4>Prosenttiosuutta vastaava määrä luvusta - laskuri</h4>
            <p>
                Syötä luku ja prosenttiosuus. Laskuri näyttää annettua prosenttiosuutta vastaavan määrän luvusta.
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
            {(values.num && values.percent) &&<p><b>{values.percent}% × {values.num} = ({values.percent}/100) × {values.num} = <span style={{fontSize: '1.2em', color: '#155724'}}>{values.num * values.percent / 100}</span></b></p>}
            <Notification message={message} errorMessage={errorMessage} />
            </div>
            <h5>Prosenttiosuutta vastaavan luvun laskeminen luvusta</h5>
            <p>
                x% numerosta y lasketaan kaavalla:
                <br />
                <span style={{fontWeight: 'bold'}}>x% × y = (x/100) × y</span>
                <br />
                Esimerkiksi 60% numerosta 500 saadaan kaavalla:
                <br />
                <span style={{fontWeight: 'bold'}}>60% × 500 = (60 / 100) × 500 = 300</span>
                </p>
                <hr />
                <div className='calculator'>
            <h4>Prosenttiosuus laskuri</h4>
            <p>Syötä laskuriin kaksi lukua. Laskuri laskee ensimmäisen luvun prosenttiosuuden toisesta luvusta.</p>
            <label><b>Luku jonka prosenttiosuus lasketaan:</b></label>
            <InputGroup className="mb-3">
                <FormControl
                onChange={({target}) => handlePercentCalcFirstNumChange(target.value)}
                />
                <InputGroup.Prepend>
                    <InputGroup.Text>123</InputGroup.Text>          
                </InputGroup.Prepend>
            </InputGroup>
            <label><b>Luvusta:</b></label>
            <InputGroup className="mb-3">
                <FormControl
                onChange={({target}) => handlePercentCalcSecondNumChange(target.value)}
                />
                <InputGroup.Prepend>
                    <InputGroup.Text>123</InputGroup.Text>        
                </InputGroup.Prepend>
            </InputGroup>
    {(values.percentCalc.firstNum && values.percentCalc.secondNum) &&<p><b>({values.percentCalc.firstNum} / {values.percentCalc.secondNum}) × 100% = <span style={{fontSize: '1.2em', color: '#155724'}}>{(values.percentCalc.firstNum / values.percentCalc.secondNum) * 100}%</span></b></p>}
            <Notification message={percentCalcMessage} errorMessage={percentCalcErrorMessage} />
            </div>
            <h5>Prosenttiosuuden laskeminen</h5>
                <p>Luvun x prosenttiosuus luvusta y lasketaan kaavalla:
                <br />
                <span style={{fontWeight: 'bold'}}>prosenttiosuus = (x / y) × 100%</span>
                <br />
                Esimerkiksi luvun 40 prosenttiosuus luvusta 80 lasketaan kaavalla:
                <br />
                <span style={{fontWeight: 'bold'}}>(40 / 80) × 100% = 50%</span>
                </p>
            <h3>Prosentti %</h3>
            <p>Prosentti (per-cent) tarkoittaa sadasosien määrää.</p>
            <p>Yksi prosentti on yhtäkuin 1/100 laskutoimituksen osamäärä:
                <br />
                <span style={{fontWeight: 'bold'}}>1% = 1/100 = 0.01</span>
            </p>
            <p>Kymmenen prosenttia on yhtäkuin 10/100 laskutoimituksen osamäärä:
                <br />
                <span style={{fontWeight: 'bold'}}>10% = 10/100 = 0.1</span>
            </p>
            <p>Viisikymmentä prosenttia on yhtäkuin 50/100 laskutoimituksen osamäärä:
                <br />
                <span style={{fontWeight: 'bold'}}>50% = 50/100 = 0.5</span>
            </p>
            <p>Sata prosenttia on yhtäkuin 100/100 laskutoimituksen osamäärä:
                <br />
                <span style={{fontWeight: 'bold'}}>100% = 100/100 = 1</span>
            </p>
            <p>Satakymmenen prosenttia on yhtäkuin 110/100 laskutoimituksen osamäärä:
                <br />
                <span style={{fontWeight: 'bold'}}>110% = 110/100 = 1.1</span>
            </p>
            <h5>Prosenttimerkki</h5>
            <p>
            Prosentin merkki on symboli: <span style={{fontWeight: 'bold'}}>%</span>
            <br />
            Symboli sijoitetaan luvun oikealle puolelle: <span style={{fontWeight: 'bold'}}>10%</span>
            </p>
            <h5>Prosenttiluvun määritelmä</h5>
            <p>Prosenttiosuus on arvo, joka edustaa yhden numeron suhdetta toiseen numeroon.
            <br />
            1 prosentti vastaa 1/100.
            </p>
            <p>
            100 prosenttia (100%) numerosta on sama kuin numero:
            <br />
            <span style={{fontWeight: 'bold'}}>100% × 60 = 100/100×60 = 60</span>
            </p>
            <p>
            50 prosenttia (50%) numerosta on puolet numerosta:
            <br />
            <span style={{fontWeight: 'bold'}}>50% × 100 = 50/100×100 = 50</span>
            <br />
            Eli 50% numerosta 100 on 50.
            </p>
                <h5>Muutosprosentti</h5>
                <p>Muutosprosentti x1:stä x2:ksi lasketaan kaavalla:
                <br />
                <span style={{fontWeight: 'bold'}}>Muutosprosentti = 100% × (x2 - x1) / x1</span>
                <br />
                Esimerkiksi kun luku kasvaa 80:stä 100:n:
                <br />
                <span style={{fontWeight: 'bold'}}>100% × (100 - 80) / 80 = 25%</span>
                <br />
                Esimerkiksi kun luku pienenee 100:sta 80:een:
                <br />
                <span style={{fontWeight: 'bold'}}>100% × (80 - 100) / 100 = -20%</span>
                </p>
            
        </div>
    )
}

export default PercentCalc