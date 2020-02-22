import React, { useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const CharCount = () => {
    const [string, setString] = useState('')
    const [results, setResults] = useState({length: {chars: 0, charsWithoutSpaces: 0}, words: 0})

    const handleChange = (value) => {
        setString(value)
        console.log(countChar(value))
        const returnedCharrs = countChar(value)
        setResults({...results, words: countWords(value), length: returnedCharrs})
        console.log(results)
    }

    const countChar = (value) => {
        let spaces = 0
        for(let i = 0; i < value.length; i++) {
            if(value.charAt(i) === ' ') {
                spaces++
                console.log(spaces)
            }
        }
        console.log(results)
        return {
            chars: value.length,
            charsWithoutSpaces: value.length - spaces
        }
    }

    const countWords = (value) => {
        let words = 0
        let i = 1
        while(i < value.length) {
            if(value.charAt(i) === ' ' || value.charAt(i) === '.') {
                words++;
                while(value.charAt(i + 1) === ' ' || value.charAt(i + 1) === '.') {
                    i++
                }
            }
            i++
        }
        return words;
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
                    Hyöty
                    </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                Merkki- ja sanalaskuri
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Merkki- ja sanalaskuri
            </h2>
            <p>
                Laskuri laskee syötetyn tekstin merkkien ja sanojen määrän.
            </p>
            <p>Teksti sisältää <b>{results.length.chars}</b> merkkiä (ilman välilyöntejä {results.length.charsWithoutSpaces}) ja <b>{results.words}</b> sanaa</p>
            <textarea class="form-control" rows="10" value={string} onChange={({target}) => handleChange(target.value)}></textarea>
        </div>
    )
}

export default CharCount