import React, {useState} from 'react'

const BinaryConverter = () => {
    const [binary, setBinary] = useState("1010")
    const [decimal, setDecimal] = useState("10")

    const convertBinToDec = (bin) => {
        setBinary(bin)
        const convertedDecimal = parseInt((bin + '').replace(/[^01]/gi, ''), 2)
        setDecimal(convertedDecimal)
        console.log(binary, decimal)
    }

    return (
        <div>
            <h2>
            Binääri desimaali muunnin
            </h2>
            <div>
                <form>
                    <input value={binary} onChange={({target}) => convertBinToDec(target.value)}>
                    </input>
                </form>
                {isNaN(decimal) ? <p></p> : <p>{binary} on desimaalilukuna {decimal}</p>}
            </div>
        </div>
    )
}

export default BinaryConverter