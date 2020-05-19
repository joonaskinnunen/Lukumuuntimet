import React, { useState, useEffect } from 'react'
import Notification from '../Notification'
import { Breadcrumb, Table, Form, Col, InputGroup } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import axios from 'axios';

const ExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState([])
    const [lastUpdated, setLastUpdated] = useState('2020-05-11')
    const [selectedCurrencies, setSelectedCurrencies] = useState({ firstNum: { inputValue: '0', currency: '0' }, secondNum: { inputValue: '0', currency: '0' } })
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const getCurrencyFromCode = (currency) => {
        switch (currency) {
            case 'CAD':
                return 'Kanadan dollari'
            case 'JPY':
                return 'Japanin jeni'
            case 'BGN':
                return 'Bulgarian leva'
            case 'CZK':
                return 'Tšekin koruna'
            case 'DKK':
                return 'Tanskan kruunu'
            case 'GBP':
                return 'Englannin punta'
            case 'HUF':
                return 'Unkarin forintti'
            case 'PLN':
                return 'Puolan zloty'
            case 'RON':
                return 'Romanian leu'
            case 'SEK':
                return 'Ruotsin kruunu'
            case 'CHF':
                return 'Sveitsin frangi'
            case 'NOK':
                return 'Norjan kruunu'
            case 'HRK':
                return 'Kroatian kuna'
            case 'RUB':
                return 'Venäjän rupla'
            case 'TRY':
                return 'Turkin liira'
            case 'AUD':
                return 'Australian dollari'
            case 'BRL':
                return 'Brasilian real'
            case 'CNY':
                return 'Kiinan juan / renminbi'
            case 'HKD':
                return 'Hongkongin dollari'
            case 'IDR':
                return 'Indonesian rupia'
            case 'ILS':
                return 'Israelin sekeli'
            case 'INR':
                return 'Intian rupia'
            case 'KRW':
                return 'Etelä-Korean won'
            case 'MYR':
                return 'Malesian ringgit'
            case 'NZD':
                return 'Uuden-Seelannin dollari'
            case 'PHP':
                return 'Filippiinien peso'
            case 'SGD':
                return 'Singaporen dollari'
            case 'THB':
                return 'Thaimaan baht'
            case 'ZAR':
                return 'Etelä-Afrikan randi'
            case 'USD':
                return 'Yhdysvaltain dollari'
            case 'ISK':
                return 'Islannin kruunu'
            case 'MXN':
                return 'Meksikon peso'
            default:
                return 'Valuutan nimi'
        }
    }

    useEffect(() => {
        document.title = 'Valuuttalaskuri / valuuttamuunnin - Laske & Muunna'
        axios
            .get('https://api.exchangeratesapi.io/latest')
            .then(response => {
                const lastUpdated = response.data.date.split('-').reverse().join('.')
                setLastUpdated(lastUpdated)
                let arr = Object.entries(response.data.rates)
                for (let i = 0; i < arr.length; i++) {
                    arr[i].push(getCurrencyFromCode(arr[i][0]))
                }
                arr.push(["EUR", 1, "Euro"])
                arr.sort((a, b) => a[2].localeCompare(b[2]))
                setExchangeRates(arr)
            })
    }, [])

    const handleFirstNumChange = (value) => {
        value = value.replace(/,/g, '.')
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value !== 0) {
            const factor = exchangeRates[selectedCurrencies.secondNum.currency][1] / exchangeRates[selectedCurrencies.firstNum.currency][1]
            setSelectedCurrencies({ secondNum: { ...selectedCurrencies.secondNum, inputValue: value * factor }, firstNum: { ...selectedCurrencies.firstNum, inputValue: value } })
            value.length > 0 ? setMessage(`${value} ${exchangeRates[selectedCurrencies.firstNum.currency][2]} on ${value * factor} ${exchangeRates[selectedCurrencies.secondNum.currency][2]}`) : setMessage('')
        } else {
            setMessage('')
            setErrorMessage('')
        }
    }

    const handleSecondNumChange = (value) => {
        value = value.replace(/,/g, '.')
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value !== 0) {
            const factor = exchangeRates[selectedCurrencies.firstNum.currency][1] / exchangeRates[selectedCurrencies.secondNum.currency][1]
            setSelectedCurrencies({ firstNum: { ...selectedCurrencies.firstNum, inputValue: value * factor }, secondNum: { ...selectedCurrencies.secondNum, inputValue: value } })
            value.length > 0 ? setMessage(`${value} ${exchangeRates[selectedCurrencies.secondNum.currency][2]} on ${value * factor} ${exchangeRates[selectedCurrencies.firstNum.currency][2]}`) : setMessage('')
        } else {
            setMessage('')
            setErrorMessage('')
        }
    }

    const handleFirstCurrencyChange = (value) => {
        const factor = exchangeRates[selectedCurrencies.secondNum.currency][1] / exchangeRates[value][1]
        setSelectedCurrencies({ secondNum: { ...selectedCurrencies.secondNum, inputValue: selectedCurrencies.firstNum.inputValue * factor }, firstNum: { ...selectedCurrencies.firstNum, currency: value } })
        setMessage(`${selectedCurrencies.firstNum.inputValue} ${exchangeRates[value][2]} on ${selectedCurrencies.firstNum.inputValue * factor} ${exchangeRates[selectedCurrencies.secondNum.currency][2]}`)
    }

    const handleSecondCurrencyChange = (value) => {
        const factor = exchangeRates[value][1] / exchangeRates[selectedCurrencies.firstNum.currency][1]
        setSelectedCurrencies({ firstNum: { ...selectedCurrencies.firstNum }, secondNum: { ...selectedCurrencies.secondNum, inputValue: selectedCurrencies.firstNum.inputValue * factor, currency: value } })
        setMessage(`${selectedCurrencies.firstNum.inputValue} ${exchangeRates[selectedCurrencies.firstNum.currency][2]} on ${selectedCurrencies.firstNum.inputValue * factor} ${exchangeRates[value][2]}`)
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
                        Raha
                </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                    Valuuttalaskuri / valuuttamuunnin
                    </Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <h2>
                    Valuuttalaskuri / valuuttamuunnin
                </h2>
                <div className="calculator">
                    <p>Valuuttalaskurilla voit muuttaa valitun valuutan arvon toiseen valuuttaan.</p>
                    <p>Valitse ensin alkuperäinen valuutta ja syötä vaihdettavan valuutan määrä. Tämän jälkeen valitse valuutta, johon arvo muutetaan.
                        <br />
                        Kun syötät uuden arvon jompaan kumpaan kentistä, toisen valuutan vastaava arvo päivittyy toiseen kenttään.
                    </p>
                    <p>Valuuttalaskurin kurssit haetaan Euroopan keskuspankin tietokannasta.</p>
                    <p>
                    </p>
                    <form>
                        <Form.Row>
                            <InputGroup as={Col} md="6">
                                <Form.Control
                                    value={selectedCurrencies.firstNum.inputValue}
                                    onChange={({ target }) => handleFirstNumChange(target.value)} />
                            </InputGroup>
                            <Form.Group as={Col} md="6">
                                <Form.Control as="select"
                                    onChange={({ target }) => handleFirstCurrencyChange(target.value)}
                                >
                                    {exchangeRates.map((x, i) => <option key={i} value={i}>{x[0]} - {x[2]}</option>)}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <InputGroup as={Col} md="6">
                                <Form.Control
                                    value={selectedCurrencies.secondNum.inputValue}
                                    onChange={({ target }) => handleSecondNumChange(target.value)}
                                />
                            </InputGroup>
                            <Form.Group as={Col} md="6">
                                <Form.Control as="select"
                                    onChange={({ target }) => handleSecondCurrencyChange(target.value)}
                                >
                                    {exchangeRates.map((x, i) => <option key={i} value={i}>{x[0]} - {x[2]}</option>)}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </form>
                    <Notification message={message} errorMessage={errorMessage} />
                </div>
            </div>
            <h4>Valuuttakurssit suhteessa euroon</h4>
            <Table responsive='sm' size='sm' className='table table-bordered table-hover hoverCells' style={{ marginBottom: '50px' }}>
                <tbody>
                    <tr>
                        <th scope="row">Valuutta</th>
                        <th scope="row">Valuuttakoodi</th>
                        <th scope="row">EUR</th>
                    </tr>
                    {exchangeRates.map((x, i) => <tr key={i}><td>{x[2]}</td><td>{x[0]}</td><td>{x[1]}</td></tr>)}
                    <tr>
                        <td colSpan='3'>
                            <b>Valuttakurssit päivitetty viimeksi {lastUpdated}</b>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default ExchangeRates