import React, { useState, useEffect } from 'react'
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
                Painoindeksi (BMI) on pituuden ja painon perusteella laskettu kehon rasvan määrän mittari, jota sovelletaan aikuisiin miehiin ja naisiin.
                </p>
            <p>
                Painoindeksiä käytetään laajasti yleisenä indikaattorina siitä, onko ihmisen ruumiinpaino terveellisellä tasolla.
                Painoindeksin lukemaa käytetään erityisesti määrittelemään onko henkilö alipainoinen, normaalipainoinen vai ylipainoinen.
                Ihminen voidaan jakaa painoindeksin perusteella myös tarkemmin eri alaluokkiin, kuten vaikeasti ylipainoinen tai sairaalloisesti ylipainoinen.
                </p>
            <p>
                Painoindeksi ei ole kovin tarkka eikä yksilöllinen mittari, mutta se antaa hyvän yleiskuvan siitä kannattaako omaan painoon kiinnittää enemmän huomiota tai huolestua.
                </p>
            <div className="calculator">
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
                <h4>Painoindeksisi on {Math.round((values.bmi + Number.EPSILON) * 100) / 100}</h4>
            </div>
            <table responsive className="table">
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
            <h4>Painoindeksin laskeminen</h4>
            <p>
                Painoindeksi, eli BMI / Body Mass Index = paino kilogrammoina / pituus korotettuna toiseen potenssiin (metreinä).
            <br />
                <span style={{ fontWeight: 'bold' }}>
                    <var>Painoindeksi<sub>(kg/m<sup>2</sup>)</sub> = paino<sub>(kg)</sub> / pituus<sup>2</sup><sub>(m)</sub>.</var>
                </span>
                <br />
            </p>
            <p>
                Esimerkiksi 80 kiloa painavan ja 180 senttiä pitkän henkilön painoindeksi lasketaan kaavalla:
            <br />
                <span style={{ fontWeight: 'bold' }}>
                    <var>Painoindeksi<sub>(kg/m<sup>2</sup>)</sub> = 80<sub>(kg)</sub> / 1.8<sup>2</sup><sub>(m)</sub> = 24.69</var>
                </span>
            </p>
            <h4>Painoindeksin ongelmat mittarina</h4>
            <p>
                Vaikka painoindeksi (BMI) on yleisesti ja laajasti käytetty, hyödyllinen mittari terveellisestä painosta, siihen sisältyy ongelmia.
                Painoindeksi ei ota huomioon kehon koostumusta. Kehotyyppejä on hyvin erilaisia. Lihasten, rasvan ja luumassan määrä vaihtelee eri ihmisillä, eikä painoindeksi osaa ottaa näitä eroja huomioon.
                Siksi painoindeksiä ei pidä eikä kannata käyttää ainoana mittarina terveellisen painon määrittämisessä.
            </p>
            <h4>Kenen ei kannattaisi käyttää painoindeksialaskuria?</h4>
            <p>
                Painoindeksilaskuri ei sovi kehonrakentajille, pitkän matkan urheilijoille, raskaana oleville naisille, vanhuksille tai pienille lapsille.
                Tämä johtuu siitä, että painoindeksi ottaa huomioon ainoastaan painon, eikä sitä koostuuko paino lihaksista vai rasvasta.
                Esimerkiksi urheilijoilla saattaa olla korkea painoindeksi, mutta se ei tarkoita normaalia korkeampaa sairastumisriskiä.
                Lapsilla tai vanhuksilla saattaa olla taas normaalia pienempi lihasmassa, mikä aiheuttaa sen, että painoindeksi on normaalia suurempi.
                Raskauden ja imetyksen aikana kehonkoostumus muuttuu, joten painoindeksin käyttäminen mittarina ei ole tarkoituksenmukaista.
            </p>
            <h4>Ylipainon ja korkean painoindeksin riskit</h4>
            <p>Korkeaan painoindeksiin ja ylipainoon liittyy monia riskejä. Yleisimpiä ylipainon aiheuttamia riskejä ovat:</p>
            <ul>
                <li>
                    Korkea verenpaine
                </li>
                <li>
                    Korkeammat LDL-kolesterolitasot, jota pidetään yleisesti pahana kolesterolina. Alhaisemmat HDL-kolesterolitasot, jota pidetään hyvänä kolesterolina
                </li>
                <li>
                    Uniapnea ja hengitysvaikeudet
                </li>
                <li>
                    Sepelvaltimotauti
                </li>
                <li>
                    Tyypin 2 diabetes
                </li>
                <li>
                    Aivoinfarkti
                </li>
                <li>
                    Monet syövät, esimerkiksi: rintasyöpä, paksusuolen syöpä, munuaissyöpä, sappirakon syöpä, maksasyöpä
                </li>
                <li>
                    Yleinen elämänlaadun heikkeneminen
                </li>
                <li>
                    Psyykkiset sairaudet kuten masennus ja ahdistus
                </li>
                <li>
                    Monenlaiset kivut ja vaikeudet fyysisten toimintojen kanssa
                </li>
                <li>
                    Lisääntynyt kuolleisuusriski verrattuna normaalin painoindeksin omaaviin henkilöihin
                </li>
            </ul>
            <p>
                Kuten yllä olevasta luettelosta on nähtävissä, ylipainosta ja korkeasta painoindeksistä voi aiheutua lukuisia negatiivisia, joissakin tapauksissa kohtalokkaita seurauksia. Yleisen käsityksen mukaan ihmisen tulisi yrittää ylläpitää painoindeksi alle 25:n. Painoindeksi ei ole kuitenkaan mittarina kovin tarkka ja ihmisten yksilöllisistä eroista johtuen painoindeksi ei aina "kerro koko totuutta".
                Jos oma paino huolestuttaa, on aina suositeltavaa ottaa yhteyttä lääkäriin.
            </p>
            <h4>Alipainon ja matalan painoindeksin riskit</h4>
            <p>Ylipainon lisäksi myös alipainossa ja liian matalassa painoindeksissä on omat riskinsä:</p>
            <ul>
                <li>
                    Aliravitsemus, anemia, vitamiinipuutokset
                </li>
                <li>
                    Osteoporoosi
                </li>
                <li>
                    Immuunijärjestelmän heikkeneminen
                </li>
                <li>
                    Kasvu- ja kehittymisvaikeudet, erityisesti lapsilla ja teini-ikäisillä
                </li>
                <li>
                    Hormonaalinen epätasapaino naisilla, joka voi häiritä kuukautiskiertoa ja aiheuttaa lisääntymisvaikeuksia
                </li>
                <li>
                    Suurempi mahdollisuus keskenmenoon raskauden ensimmäisen kolmanneksen aikana
                </li>
                <li>
                    Suurempi riski leikkauksen aiheuttamiin komplikaatioihin
                </li>
                <li>
                    Lisääntynyt kuolleisuusriski verrattuna normaalin painoindeksin omaaviin henkilöihin
                </li>
            </ul>
            <p>
                Joissakin tapauksissa alipaino ja alhainen painoindeksi voi olla merkki sairaudesta kuten anoreksiasta. Jos oma paino huolestuttaa, on aina suositeltavaa ottaa yhteyttä lääkäriin.
            </p>
        </div>
    )
}

export default BMICalc