import React, { useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const CharCount = () => {
    const [string, setString] = useState('')
    const [results, setResults] = useState({length: {chars: 0, charsWithoutSpaces: 0}, words: 0, sentences: 0, newLines: 0})

    const handleChange = (value) => {
        setString(value)
        setResults({...results, words: countWords(value), length: countChar(value), sentences: countSentences(value), newLines: countNewLines(value)})
        if(value.length === 0) {
            setResults({length: {chars: 0, charsWithoutSpaces: 0}, words: 0, sentences: 0, newLines: 0})
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
        str = str.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, ' ')
        str = str.replace(/[ ]{2,}/gi,' ')
        str = str.replace(/\n /,"\n")
        return str.split(' ').length
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
    <p><b>Teksti sisältää {results.length.charsWithoutSpaces} merkkiä ja <b>{results.words}</b> sanaa.</b></p>
            <textarea className="form-control" rows="10" value={string} onChange={({target}) => handleChange(target.value)}></textarea>
            <p style={pStyle}>Teksti sisältää:</p>
            <ul>
                <li>
                    <b>{results.length.charsWithoutSpaces}</b> merkkiä
                </li>
                <li>
                    <b>{results.length.chars}</b> merkkiä välilyönnit ja rivinvaihdot mukaan luettuna
                </li>
                <li>
                    <b>{results.words}</b> sanaa
                </li>
                <li>
                <b>{results.sentences}</b> lausetta
                </li>
                <li>
                <b>{results.newLines}</b> kappaletta
                </li>
            </ul>
        </div>
    )
}

export default CharCount