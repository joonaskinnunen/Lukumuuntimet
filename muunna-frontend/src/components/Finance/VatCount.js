import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl, Table } from 'react-bootstrap'
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

    const percentStyle = {
        fontSize: '2em',
        minWidth: '100px'
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
                    onChange={({ target }) => handleValueChange(target.value)}
                    value={valueWithoutTax}
                />
            </InputGroup>
            <label><b>Verollinen hinta:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>€</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={({ target }) => handleValueWithTaxChange(target.value)}
                    value={valueWithTax}
                />
            </InputGroup>
            <label><b>Arvonlisäveroprosentti:</b></label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={({ target }) => handleVatChange(target.value)}
                    value={vatPercent}
                />
            </InputGroup>
            <p><b>Arvonlisäveron määrä: {Math.round((valueWithTax - valueWithoutTax + Number.EPSILON) * 100) / 100}€</b></p>
            <hr />
            <hr />
            <h3>Arvonlisäveron laskeminen</h3>
            <p>Arvonlisävero on vero, joka lisätään verottomaan hintaan.</p>
            <h5>Arvonlisäveron prosentuaalinen osuus verollisesta hinnasta</h5>
            <p>
                Arvonlisäveron prosentuaalisen osuuden voi laskea verollisesta hinnasta kaavalla:
                <br />
                <span style={{ fontWeight: 'bold' }}>(1-(1/(1+alv-prosentti/100))) * 100</span>.
                <br />
                Esimerkiksi jos arvonlisäveroprosentti on 24%, veron osuus hinnasta:
                <br />
                <span style={{ fontWeight: 'bold' }}>(1-(1/(1+1/24))) * 100 = (1-(1/(1+0.24))) * 100 = (1-1/1.24) * 100 = 0.1935 * 100 ≈ 19.4%</span>
            </p>
            <h5>Verollinen hinta verottomasta hinnasta</h5>
            <p>
                Verottomasta hinnasta saa laskettua verollisen hinnan kaavalla:
                <br />
                <span style={{ fontWeight: 'bold' }}>veroton hinta * (1 + alv-prosentti / 100)</span>
                <br />
                Esimerkiksi jos veroton hinta on 100 euroa ja arvonlisäveroprosentti 24%, arvonlisäverollinen hinta saadaan kaavalla:
                <br />
                <span style={{ fontWeight: 'bold' }}>100€ * (1 + 24 / 100) = 100€ * 1.24 = 124€</span>.
            </p>
            <h5>Veroton hinta verollisesta hinnasta</h5>
            <p>
                Arvonlisäverollisesta hinnasta saa laskettua verottoman kaavalla:
                <br />
                <span style={{ fontWeight: 'bold' }}>verollinen hinta / (1 + alv-prosentti / 100)</span>.
                <br />
                Esimerkiksi jos verollinen hinta on 124€ ja arvonlisäveroprosentti on 24%, arvonlisäveroton hinta saadaan kaavalla:
                <br />
                <span style={{ fontWeight: 'bold' }}>124€ / (1 + 24% / 100) = 124€ / 1.24 = 100€</span>.
            </p>
            <hr />
            <hr />
            <h4>Arvonlisäverokannat Suomessa</h4>
            <p>Arvonlisäverokannat vaihtelee Suomessa tuotteittain. Alla olevasta taulukosta näet eri tuotteiden arvonlisäveroprosentit.</p>
            <Table responsive='sm' className='table table-bordered table-hover hoverCells' style={{ marginBottom: '50px' }}>
                <tbody>
                    <tr>
                        <th scope="row"><strong>Yleinen verokanta.</strong> T&auml;m&auml; on useimpien tavaroiden ja palveluiden verokanta.</th>
                        <td style={percentStyle}>24 %</td>
                    </tr>
                    <tr>
                        <th scope="row"><strong>Alennettu verokanta:</strong>
                            <ul>
                                <li>elintarvikkeet</li>
                                <li>rehut</li>
                                <li>ravintola- ja ateriapalvelut</li>
                            </ul>
                        Huomaa, ett&auml; alempi 14 %:n verokanta ei koske alkoholijuomien ja tupakkatuotteiden myynti&auml; eik&auml; tarjoilua.</th>
                        <td style={percentStyle}>14 %</td>
                    </tr>
                    <tr>
                        <th scope="row"><strong>Alennettu verokanta:</strong>
                            <ul>
                                <li>kirjat</li>
                                <li>sanoma- ja aikakauslehdet</li>
                                <li>l&auml;&auml;kkeet</li>
                                <li>liikuntapalvelut</li>
                                <li>elokuvan&auml;yt&ouml;kset</li>
                                <li>kulttuuri- ja viihdetilaisuuksien sis&auml;&auml;np&auml;&auml;symaksut</li>
                                <li>henkil&ouml;kuljetukset</li>
                                <li>majoituspalvelut</li>
                                <li>televisio- ja yleisradiotoiminnasta saadut korvaukset</li>
                            </ul>
                        </th>
                        <td style={percentStyle}>10 %</td>
                    </tr>
                    <tr>
                        <th scope="row"><strong>Nollaverokanta (n&auml;ist&auml; hankinnoista my&ouml;s v&auml;hennysoikeus):</strong>
                            <ul>
                                <li>arvonlis&auml;verottomien vesialusten myynti, vuokraus ja rahtaus sek&auml; n&auml;ihin aluksiin kohdistuvat ty&ouml;suoritukset</li>
                                <li>j&auml;senlehtien ja mainosten veroton myynti yleishy&ouml;dyllisille yhteis&ouml;ille</li>
                                <li>varastointimenettelyihin liittyv&auml; veroton myynti (verovarasto alvissa)</li>
                                <li>vienti EU-alueen ulkopuolelle</li>
                                <li>tavaran myynti EU-maihin arvonlis&auml;verovelvollisille ostajille (ohje alv eu-tavarakaupassa)</li>
                                <li>muut kansainv&auml;liseen kauppaan liittyv&auml;t tavaroiden ja palvelujen myynnit, esim. veroton myynti diplomaateille ja kansainv&auml;lisille j&auml;rjest&ouml;ille.</li>
                            </ul>
                        </th>
                        <td style={percentStyle}>0 %</td>
                    </tr>
                    <tr>
                        <td>
                            Lähde: <a href='https://www.vero.fi/yritykset-ja-yhteisot/tietoa-yritysverotuksesta/arvonlisaverotus/arvonlis%C3%A4veroprosentit/' target='_blank' rel="noopener noreferrer">vero.fi</a>
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default VatCount