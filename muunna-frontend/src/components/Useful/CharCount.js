import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const CharCount = () => {

    useEffect(() => {
        document.title = 'Merkki- ja sanalaskuri - Laske & Muunna'
    })

    const [string, setString] = useState('')
    const [results, setResults] = useState({length: {chars: 0, charsWithoutSpaces: 0}, words: {popularWords: [], numOfWords: 0, avgLength: 0}, sentences: 0, newLines: 0})

    const handleChange = (value) => {
        setString(value)
        setResults({...results, words: countWords(value), length: countChar(value), sentences: countSentences(value), newLines: countNewLines(value)})
        if(value.length === 0) {
            setResults({length: {chars: 0, charsWithoutSpaces: 0}, words: {popularWords: [], numOfWords: 0, avgLength: 0}, sentences: 0, newLines: 0})
        }
    }

    const countChar = (value) => {
        let spaces = 0
        for(let i = 0; i < value.length; i++) {
            if(value.charAt(i).match(/\s+$/)) {
                spaces++
            }
        }
        return {
            chars: value.length,
            charsWithoutSpaces: value.length - spaces
        }
    }

    const countWords = (value) => {
        let str = value.replace(/(^\s*)|(\s*$)/gi,'')
        str = str.replace(/[\r\n\u0085\u2028\u2029]+/g, ' ')
        str = str.replace(/[ ]{2,}/gi,' ')
        str = str.replace(/\n /,"\n")
        str = str.split(' ')
        let counts = {}
        str.forEach(function(x) { counts[x] = (counts[x] || 0)+1 })
        let wordsArr = Object.entries(counts)
        wordsArr = wordsArr.sort((a, b) => b[1] - a[1])
        let sumOfLengths = 0;
        wordsArr.map(x => sumOfLengths += x[0].length * x[1])
        let words = {
            popularWords: wordsArr.length > 10 ? wordsArr.splice(9, wordsArr.length-1) : wordsArr,
            numOfWords: str.length,
            avgLength: sumOfLengths / str.length
        }
        return words
    }

    const countSentences = (value) => {
        let numOfSentences = value.replace(/(\.+|:|!|\?)("*|'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|").length
        if(value.charAt(value.length - 1) === ' ' && value.charAt(value.length - 2) === '.') {
            numOfSentences--
        }
        return numOfSentences
    }

    const countNewLines = (value) => {
        let newLines = value.split(/\r\n|\r|\n/).length
        for(let i = value.length - 1; i > 0; i--) {
            if(value.charAt(i).match(/\r\n|\r|\n/) && value.charAt(i-1).match(/\r\n|\r|\n/)) {
                newLines--
            }
        }
        if(value.charAt(value.length-1).match(/\r\n|\r|\n/)) {
            newLines--
        }
        return newLines
    }

    const pStyle = {
        marginTop: 20
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
            <p><b>Teksti sisältää <b>{results.length.charsWithoutSpaces}</b> merkkiä ja <b>{results.words.numOfWords}</b> sanaa.</b></p>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                    <i className="fas fa-pencil-alt prefix"></i>
                    </span>
                </div>
                <textarea className="form-control" rows="10" value={string} onChange={({target}) => handleChange(target.value)}></textarea>
            </div>
            <p style={pStyle}>Teksti sisältää:</p>
            <ul>
                <li>
                    <b>{results.length.charsWithoutSpaces}</b> merkkiä
                </li>
                <li>
                    <b>{results.length.chars}</b> merkkiä välilyönnit ja rivinvaihdot mukaan luettuna
                </li>
                <li>
                    <b>{results.words.numOfWords}</b> sanaa
                </li>
                <li>
                <b>{results.sentences}</b> lausetta
                </li>
                <li>
                <b>{results.newLines}</b> kappaletta
                </li>
                <li>
                <b>{Math.round(results.words.avgLength * 100) / 100}</b> kirjainta keskimäärin sanassa
                </li>
            </ul>
            <p>Eniten toistuvat sanat:</p>
            <ul>
                {results.words.popularWords.map(x => <li key={x}>{x[0]} (<b>{x[1]}</b> kpl. <b>{Math.round(x[1] / results.words.numOfWords * 100 * 100) / 100}</b> %)</li>)}
            </ul>
        </div>
    )
}

export default CharCount