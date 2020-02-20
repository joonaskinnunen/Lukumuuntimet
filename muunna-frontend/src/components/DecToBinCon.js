import React, {useState, useEffect} from 'react'

const DecToBinCon = () => {
    const [decimal, setDecimal] = useState('')
    const [binary, setBinary] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-binääriluku muunnin'
    })

    const handleChange = (value) => {
        setDecimal(value)
        setBinary(convertDectoBin(decimal))
        if (isNaN(value)) {
            setResult('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setResult(`${decimal} on binäärilukuna ${binary}`)
        } else {
            setResult('')
        }
        console.log(binary)
        console.log(decimal)
        console.log(result)
    }

    const convertDectoBin = (dec) => {
        if (dec < 0) {
            dec = 0xFFFFFFFF + dec + 1
        }
        return parseInt(dec, 10).toString(2);
    }

    return (
        <div>
            <div>
            <h2>
            Desimaali-binääriluku muunnin
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
export default DecToBinCon