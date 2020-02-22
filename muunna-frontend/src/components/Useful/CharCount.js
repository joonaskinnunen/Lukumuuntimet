import React, { useState } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer, InputGroup, FormControl } from "react-router-bootstrap"

const CharCount = () => {
    const [string, setString] = useState('')
    const [results, setResults] = useState({length: 0})

    const handleChange = (value) => {
        setString(value)
        countChar(value)
    }

    const countChar = (value) => {
        setResults({...results, length: value.length})

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
            <p>Teksti sisältää <b>{results.length}</b> merkkiä.</p>
                <textarea class="form-control" rows="10" value={string} onChange={({target}) => handleChange(target.value)}></textarea>
        </div>
    )
}

export default CharCount