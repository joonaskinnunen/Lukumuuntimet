import React, {useState, useEffect} from 'react'

const DecToHexCon = () => {
    const [decimal, setDecimal] = useState('')
    const [hex, setHex] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-heksadesimaali muunnin'
    })

    const handleChange = (value) => {
        setDecimal(value)
        setHex(convertDectoHex(decimal))
        if (isNaN(value)) {
            setResult('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setResult(`${decimal} on heksadesimaalilukuna ${hex.toUpperCase()}`)
        } else {
            setResult('')
        }
        console.log(hex)
        console.log(decimal)
        console.log(result)
    }

    const convertDectoHex = (dec) => {
        if (dec < 0) {
            dec = 0xFFFFFFFF + dec + 1
        }
        return parseInt(dec, 10).toString(16);
    }

    return (
        <div>
            <div>
            <h2>
            Desimaali-heksadesimaali muunnin
            </h2>
            <div>
                <form>
                    <p>
                        Syötä luku: <input value={decimal} onChange={({target}) => handleChange(target.value)}>
                        </input>
                    </p>
                </form>
                <p><b>{result}</b></p>
            </div>
            </div>
        </div>
    )
}
export default DecToHexCon