import React, {useState, useEffect} from 'react'
import Notification from '../Notification'

const DecToBinCon = () => {
    const [decimal, setDecimal] = useState('')
    const [binary, setBinary] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-binääriluku muunnin'
    })

    const handleChange = (value) => {
        setDecimal(value)
        setBinary(convertDectoBin(decimal))
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setMessage(`${decimal} on binäärilukuna ${binary}`)
        } else {
            setMessage('')
            setErrorMessage('')
        }
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
                <Notification message={message} result={binary} errorMessage={errorMessage} />
            </div>
            </div>
        </div>
    )
}
export default DecToBinCon