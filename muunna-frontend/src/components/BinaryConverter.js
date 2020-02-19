import React, {useState} from 'react'

const BinaryConverter = () => {
    const [binary, setBinary] = useState("1010")
    const [decimal, setDecimal] = useState("10")

    const convertBinToDec = (bin) => {
        setBinary(bin)
        for(let i = 0; i < bin.length; i++) {
            if(bin.charAt(i) !== '0' && bin.charAt(i) !== '1') {
                console.log(bin.charAt(i))
                setDecimal('Virheellinen binääriluku!')
                break
            } else {
                const convertedDecimal = parseInt((bin + '').replace(/[^01]/gi, ''), 2)
                setDecimal(convertedDecimal)
            }
        }
        console.log(binary, decimal)
        console.log(typeof(bin))
        console.log(bin.length)
    }

    return (
        <div>
            <h2>
            Binääri desimaali muunnin
            </h2>
            <div>
                <form>
                    <p>
                        Syötä binääriluku: <input value={binary} onChange={({target}) => convertBinToDec(target.value)}>
                        </input>
                    </p>
                </form>
                {isNaN(decimal) || binary.length == 0 ? <p><b>Virheellinen binääriluku!</b></p> : <p><b>{binary} on desimaalilukuna {decimal}</b></p>}
            </div>
        </div>
    )
}

export default BinaryConverter