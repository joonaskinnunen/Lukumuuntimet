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
            case 'AED':
                return 'Yhdistyneiden arabiemiirikuntien dirhami'
            case 'AFN':
                return 'Afganistanin afgaani'
            case 'ALL':
                return 'Albanian lek'
            case 'AMD':
                return 'Armenian dram'
            case 'ANG':
                return 'Alankomaiden Antillien guldeni'
            case 'AOA':
                return 'Angolan kwanza'
            case 'ARS':
                return 'Argentiinan peso'
            case 'AWG':
                return 'Aruban floriini'
            case 'AZN':
                return 'Azerbaidžanin manat'
            case 'BAM':
                return 'Bosnian ja Hertsegovinan vaihdettava markka'
            case 'BBD':
                return 'Barbadoksen dollari'
            case 'BDT':
                return 'Bangladeshin taka'
            case 'BHD':
                return 'Bahrainin dinaari'
            case 'BIF':
                return 'Burundin frangi'
            case 'BMD':
                return 'Bermudan dollari'
            case 'BND':
                return 'Brunein dollari'
            case 'BOB':
                return 'Bolivian boliviano'
            case 'BSD':
                return 'Bahaman dollari'
            case 'BTC':
                return 'Bitcoin'
            case 'BTN':
                return 'Bhutanin ngultrum'
            case 'BWP':
                return 'Botswanan pula'
            case 'BYN':
                return 'Valko-Venäjän rupla'
            case 'BZD':
                return 'Belizen dollari'
            case 'CDF':
                return 'Kongon frangi'
            case 'CLF':
                return 'Chilen unidades de fomento'
            case 'CLP':
                return 'Chilen peso'
            case 'CNH':
                return 'Kiinan Offshore Yuan'
            case 'COP':
                return 'Kolumbian peso'
            case 'CRC':
                return 'Costa Rican colón'
            case 'CUC':
                return 'Kuuban Convertible peso'
            case 'CUP':
                return 'Kuuban peso'
            case 'CVE':
                return 'Kap Verden escudo'
            case 'DJF':
                return 'Djiboutin frangi'
            case 'DOP':
                return 'Dominikaanisen tasavallan peso'
            case 'DZD':
                return 'Algerian dinaari'
            case 'EGP':
                return 'Egyptin punta'
            case 'ERN':
                return 'Eritrean nakfa'
            case 'ETB':
                return 'Etiopian birr'
            case 'EUR':
                return 'Euro'
            case 'FJD':
                return 'Fidžin dollari'
            case 'FKP':
                return 'Falklandin punta'
            case 'GEL':
                return 'Georgian lari'
            case 'GGP':
                return 'Guernseyn punta'
            case 'GHS':
                return 'Ghanan cedi'
            case 'GIP':
                return 'Gibraltarin punta'
            case 'GMD':
                return 'Gambian dalasi'
            case 'GNF':
                return 'Guinean frangi'
            case 'GTQ':
                return 'Guatemalan quetzal'
            case 'GYD':
                return 'Guyanan dollari'
            case 'HNL':
                return 'Hondurasin lempira'
            case 'HTG':
                return 'Haitin gourde'
            case 'IMP':
                return 'Mansaaren punta'
            case 'IQD':
                return 'Irakin dinaari'
            case 'IRR':
                return 'Iranin rial'
            case 'JEP':
                return 'Jerseyn punta'
            case 'JMD':
                return 'Jamaikan dollari'
            case 'JOD':
                return 'Jordanian dinaari'
            case 'KES':
                return 'Kenian šillinki'
            case 'KGS':
                return 'Kirgisian som'
            case 'KHR':
                return 'Kambodžan riel'
            case 'KMF':
                return 'Komorien frangi'
            case 'KPW':
                return 'Pohjois-Korean Won'
            case 'KWD':
                return 'Kuwaitin dinaari'
            case 'KYD':
                return 'Caymansaarten dollari'
            case 'KZT':
                return 'Kazakstanin tenge'
            case 'LAK':
                return 'Laosin kip'
            case 'LBP':
                return 'Libanonin punta'
            case 'LKR':
                return 'Sri Lankan rupia'
            case 'LRD':
                return 'Liberian dollari'
            case 'LSL':
                return 'Lesothon loti'
            case 'LYD':
                return 'Libyan dinaari'
            case 'MAD':
                return 'Marokon dirham'
            case 'MDL':
                return 'Moldovan leu'
            case 'MGA':
                return 'Madagaskarin ariary'
            case 'MKD':
                return 'Pohjois-Makedonian denaari'
            case 'MMK':
                return 'Myanmarin kyat'
            case 'MNT':
                return 'Mongolian tugrik'
            case 'MOP':
                return 'Macaon pataca'
            case 'MRO':
                return 'Mauritanian ouguiya'
            case 'MRU':
                return 'Mauritanian ouguiya'
            case 'MUR':
                return 'Mauritiuksen rupia'
            case 'MVR':
                return 'Malediivien rufiyaa'
            case 'MWK':
                return 'Malawin kwacha'
            case 'MZN':
                return 'Mosambikin metical'
            case 'NAD':
                return 'Namibian dollari'
            case 'NGN':
                return 'Nigerian naira'
            case 'NIO':
                return 'Nicaraguan córdoba'
            case 'NPR':
                return 'Nepalin rupia'
            case 'OMR':
                return 'Omanin rial'
            case 'PAB':
                return 'Panaman balboa'
            case 'PEN':
                return 'Perun sol'
            case 'PGK':
                return 'Papua-Uuden-Guinean kina'
            case 'PKR':
                return 'Pakistanin rupia'
            case 'PYG':
                return 'Paraguayn guaraní'
            case 'QAR':
                return 'Qatarin rial'
            case 'RSD':
                return 'Serbian dinaari '
            case 'RWF':
                return 'Ruandan frangi'
            case 'SAR':
                return 'Saudi-Arabian rial'
            case 'SBD':
                return 'Salomonsaarten dollari'
            case 'SCR':
                return 'Seychellien rupia'
            case 'SDG':
                return 'Sudanin punta'
            case 'SHP':
                return 'Saint Helenan punta'
            case 'SLL':
                return 'Sierra Leonen leone'
            case 'SOS':
                return 'Somalian šillinki'
            case 'SRD':
                return 'Surinamen dollari'
            case 'SSP':
                return 'Etelä-Sudanin punta'
            case 'STD':
                return 'Sao Tome Dobra'
            case 'STN':
                return 'São Tomén ja Príncipen dobra'
            case 'SVC':
                return 'El Salvadorin colón'
            case 'SYP':
                return 'Syyrian punta'
            case 'SZL':
                return 'Swazimaan lilangeni'
            case 'TJS':
                return 'Tadžikistanin somoni'
            case 'TMT':
                return 'Turkmenistanin manat'
            case 'TND':
                return 'Tunisian dinaari'
            case 'TOP':
                return 'Tongan paʻanga'
            case 'TTD':
                return 'Trinidadin ja Tobagon dollari'
            case 'TWD':
                return 'Uusi Taiwanin dollari'
            case 'TZS':
                return 'Tansanian šillinki'
            case 'UAH':
                return 'Ukrainan hryvnia'
            case 'UGX':
                return 'Ugandan šillinki'
            case 'UYU':
                return 'Uruguayn peso'
            case 'UZS':
                return 'Uzbekistanin som'
            case 'VES':
                return 'Venezuelan bolivar'
            case 'VND':
                return 'Vietnamin đồng'
            case 'VUV':
                return 'Vanuatu Vatu'
            case 'WST':
                return 'Samoan tala'
            case 'XAF':
                return 'Keski-Afrikan CFA-frangi'
            case 'XAG':
                return 'Hopea'
            case 'XAU':
                return 'Kulta'
            case 'XCD':
                return 'Itä-Karibian dollari'
            case 'XDR':
                return 'Erityisnosto-oikeudet '
            case 'XOF':
                return 'CFA-frangi'
            case 'XPF':
                return 'Ranskan Tyynenmeren frangi'
            case 'YER':
                return 'Jemenin rial'
            case 'ZMW':
                return 'Sambian kwacha'
            case 'ZWL':
                return 'Zimbabwen dollari'
            default:
                return ''
            case 'XPD':
                return 'Unssia Palladium'
            case 'XPT':
                return 'Unssia Platinum'
        }
    }

    useEffect(() => {
        document.title = 'Valuuttalaskuri / valuuttamuunnin - Laske & Muunna'
        axios
            .get('https://api.exchangerate.host/latest')
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
            value.length > 0 ? setMessage(`${value} ${exchangeRates[selectedCurrencies.firstNum.currency][2]} on ${parseFloat(value * factor).toFixed(3)} ${exchangeRates[selectedCurrencies.secondNum.currency][2]}`) : setMessage('')
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
            value.length > 0 ? setMessage(`${value} ${exchangeRates[selectedCurrencies.secondNum.currency][2]} on ${parseFloat(value * factor).toFixed(3)} ${exchangeRates[selectedCurrencies.firstNum.currency][2]}`) : setMessage('')
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
                        <th scope="row">1 EURO =</th>
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