import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl, Table } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import Notification from '../Notification'

const Multiplication = () => {

    const getTableValues = () => {
        let arr = []
        let newArr = []
        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {
                arr.push({ firstNum: i, secondNum: j, result: i * j })
            }
            newArr.push(arr)
            arr = []
        }
        return newArr
    }

    const [values, setValues] = useState(getTableValues())
    const [numbersToMultiply, setNumbersToMultiply] = useState({})

    useEffect(() => {
        document.title = 'Kertotaulu - Laske & Muunna'
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
        setNumbersToMultiply(x.x)
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
                    Kertotaulu
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Kertotaulu
            </h2>
            <p>
                Kertotaulusta näet eri numeroiden kertolaskujen tulon. Voit myös harjoitella kertolaskuja kertotaulun avulla tai ilman.
                Klikkaamalla kertotaulun numeron kohdalta, näet laskutoimituksen ja tuloksen taulukon ylä- ja alapuolella.
            </p>
            {numbersToMultiply.result && <h3 className='text-center'>{numbersToMultiply.firstNum} x {numbersToMultiply.secondNum} = {numbersToMultiply.result}</h3>}
            <Table responsive='sm' className='table table-bordered table-hover text-center hoverCells'>
                <thead style={{ backgroundColor: 'rgb(216, 241, 230)' }}>
                    <tr>
                        {values[0].map((x, i) => i === 0 ? <th key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        {values[0].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[1].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[2].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[3].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[4].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[5].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[6].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[7].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[8].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                    <tr>
                        {values[9].map((x, i) => i === 0 ? <th onClick={() => handleClick({ x })} key={i} scope="col" style={{ backgroundColor: 'rgb(216, 241, 230)' }} onMouseOver={changeBackground} onMouseLeave={resetThBackground}>{x.result}</th> : <td onClick={() => handleClick({ x })} onMouseOver={changeBackground} onMouseLeave={resetBackground} key={i}>{x.result}</td>)}
                    </tr>
                </tbody>
            </Table>
            {numbersToMultiply.result && <h3 className='text-center'>{numbersToMultiply.firstNum} x {numbersToMultiply.secondNum} = {numbersToMultiply.result}</h3>}
        </div>
    )
}

export default Multiplication