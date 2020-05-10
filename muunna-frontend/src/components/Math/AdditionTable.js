import React, { useState, useEffect } from 'react'
import { Breadcrumb, FormControl, Table, Form, Row, Col, Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Notification from '../Notification'

const AdditionTable = () => {

    const getTableValues = () => {
        let arr = []
        let newArr = []
        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {
                arr.push({ firstNum: i, secondNum: j, result: i + j, isRightAnswer: false })
            }
            newArr.push(arr)
            arr = []
        }
        return newArr
    }

    const randomizeQuizzes = () => {
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(values[Math.floor(Math.random() * values.length)][Math.floor(Math.random() * 10)])
            const uniqueSet = new Set(arr)
            arr = [...uniqueSet]
            arr.length < i + 1 && i--
        }
        console.log(arr)
        return arr
    }

    const [values, setValues] = useState(getTableValues())
    const [tableNumbers, setTableNumbers] = useState({})
    const [quizzes, setQuizzes] = useState(randomizeQuizzes())
    const [submitClicked, setSubmitClicked] = useState(false)

    useEffect(() => {
        document.title = 'Yhteenlasku - taulukko ja harjoituksia - Laske & Muunna'
    })

    const changeBackground = (e) => {
        e.target.style.background = '#4cdbc4'
    }

    const resetBackground = (e) => {
        e.target.style.background = 'transparent'
    }

    const resetThBackground = (e) => {
        e.target.style.background = 'rgb(216, 241, 230)'
    }

    const handleClick = (x) => {
        setTableNumbers(x.x)
    }

    const countRightAnswers = () => {
        let count = 0
        quizzes.map(x => x.isRightAnswer && count++)
        console.log(count)
        return count
    }

    const handleAnswerChange = (value, i) => {
        setSubmitClicked(false)
        let updatedQuizzes = [...quizzes]
        console.log(typeof (i))
        console.log(typeof (value))
        if (value === quizzes[i].result.toString()) {
            console.log('Oikein')
            updatedQuizzes[i].isRightAnswer = true
        } else {
            updatedQuizzes[i].isRightAnswer = false
            console.log('Väärin')
        }
        setQuizzes(updatedQuizzes)
        console.log('value ', value)
        console.log('i', i)
        console.log('quizzes', quizzes)
        quizzes[i].isRightAnswer ? console.log('oikea vastaus') : console.log('väärä vastaus')
    }

    const notificationStyle = {
        maxWidth: '250px',
        color: 'black',
        fontSize: '1.3em',
        fontFamily: 'Bowlby One SC',
        margin: 'auto',
        backgroundColor: 'rgb(245, 253, 250)',
        textAlign: 'center',
        padding: '5px',
        marginBottom: '20px'
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitClicked(true)
    }

    const resetQuizzes = () => {
        setSubmitClicked(false)
        setQuizzes(randomizeQuizzes())
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
                    Yhteenlasku
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Yhteenlasku - taulukko ja harjoituksia 
            </h2>
            <p>
                Taulukosta näet eri numeroiden yhteenlaskujen summan. Voit myös harjoitella yhteenlaskuja taulukon avulla tai ilman.
                Klikkaamalla yhteenlaskutaulukon numeron kohdalta, näet laskutoimituksen ja tuloksen taulukon ylä- ja alapuolella.
            </p>
            {tableNumbers.result && <Notification style={notificationStyle} message={`${tableNumbers.firstNum} + ${tableNumbers.secondNum} = ${tableNumbers.result}`} />}
            <Table responsive='sm' size='sm' className='table table-bordered table-hover text-center hoverCells' style={{marginBottom: '50px'}}>
                <thead style={{ backgroundColor: 'rgb(216, 241, 230)' }}>
                    <tr>
                        {values[0].map((x, i) => i === 0 ? <th key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.secondNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.secondNum}</td>)}
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        {values[0].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[1].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[2].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[3].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[4].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[5].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[6].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[7].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[8].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[9].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.firstNum}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                </tbody>
            </Table>
            {tableNumbers.result && <Notification style={notificationStyle} message={`${tableNumbers.firstNum} + ${tableNumbers.secondNum} = ${tableNumbers.result}`} />}
            <h3>Yhteenlaskuharjoituksia</h3>
            <p>Käytä ylläolevaa taulukkoa ratkaistaksesi yhteenlaskutehtävät tai laske vastaukset päässälaskuna. Kun olet vastannut kaikkiin kysymyksiin, paina "Tarkista"-painiketta niin näet oikeiden vastausten määrän. Voit arpoa uudet tehtävät painamalla "Arvo uudet kysymykset".</p>
            <Container>
            
            <Form onSubmit={handleSubmit}>
                {quizzes.map((x, i) => <div key={i}><Row style={{borderBottom: '1px dotted black', padding: '5px', margin: '5px'}}><Col xs={4} md={3}><Form.Label>{x.firstNum} + {x.secondNum} = </Form.Label></Col>
                    <Col xs={4} md={3}>
                        <FormControl
                            onChange={({ target }) => handleAnswerChange(target.value, i)}
                        />
                    </Col>
                    
                {submitClicked ? x.isRightAnswer ? <Col xs={4} md={6}><p style={{color: '#4cdbc4'}}>Hyvä, oikein!</p></Col> : <Col><p style={{color: '#ff0000'}}>Väärin</p></Col>: void 0}</Row></div>)}
                <Form.Group as={Row}>
                    <Col>
                        <Button type="submit">Tarkista</Button>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Button onClick={resetQuizzes} type='reset'>Arvo uudet kysymykset</Button>
                    </Col>
                </Form.Group>
            </Form>
            </Container>
            {submitClicked && <Notification style={notificationStyle} message={`Oikeita vastauksia ${countRightAnswers()}/10`}/>}
        </div>
    )
}

export default AdditionTable