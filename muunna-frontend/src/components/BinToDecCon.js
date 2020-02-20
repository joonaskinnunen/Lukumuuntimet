import React, {useState, useEffect} from 'react'

const BinToDecCon = () => {
    const [binary, setBinary] = useState('')
    const [decimal, setDecimal] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        handleChange(binary)
        document.title = 'Binääri desimaaliluku muunnin'
    })

    const handleChange = (value) => {
        setBinary(value)
        if(validateBinary(value)) {
            setDecimal(convertBinToDec(value))
            if(value.length > 0) {
                setResult(`${binary} on desimaalilukuna ${decimal}`)
            } else {
                setResult('')
            }
        } else {
            setResult('Virheellinen binääriluku. Syötä ainoastaan numeroita 0 tai 1.')
        }
        console.log(binary)
        console.log(decimal)
        console.log(result)

    }

    const validateBinary = (bin) => {
        for(let i = 0; i < bin.length; i++) {
            if(bin.charAt(i) !== '0' && bin.charAt(i) !== '1' && bin.charAt(i) !== ' ') {
                return false
            }
        }
        return true
    }

    const convertBinToDec = (bin) => {
        const convertedDecimal = parseInt((bin + '').replace(/[^01]/gi, ''), 2)
        return convertedDecimal
    }

    return (
        <div>
            <div>
            <h2>
            Binääri desimaali muunnin
            </h2>
            <div>
                <form>
                    <p>
                        Syötä binääriluku: <input value={binary} onChange={({target}) => handleChange(target.value)}>
                        </input>
                    </p>
                </form>
                <p><b>{result}</b></p>
            </div>
            </div>
        </div>
    )
}

export default BinToDecCon