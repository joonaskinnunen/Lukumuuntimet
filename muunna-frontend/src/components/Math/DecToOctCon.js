import React, {useState, useEffect} from 'react'
import Notification from '../Notification'

const DecToOctCon = () => {
    const [decimal, setDecimal] = useState('')
    const [oct, setOct] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        handleChange(decimal)
        document.title = 'Desimaali-oktaaliluku muunnin'
    })

    const handleChange = (value) => {
        setDecimal(value)
        setOct(convertDectoOct(decimal))
        if (isNaN(value)) {
            setErrorMessage('Syötetty luku ei ole numero')
        } else if (value.length !== 0) {
            setMessage(`${decimal} on oktaalilukuna ${oct}`)
        } else {
            setMessage('')
            setErrorMessage('')
        }
    }

    const convertDectoOct = (oct) => {
        if (oct < 0) {
            oct = 0xFFFFFFFF + oct + 1
        }
        return parseInt(oct, 10).toString(8)
    }

    return (
        <div>
            <div>
            <h2>
            Desimaali-oktaaliluku muunnin
            </h2>
            <div>
                <form>
                    <p>
                        Syötä luku: <input value={decimal} onChange={({target}) => handleChange(target.value)}>
                        </input>
                    </p>
                </form>
                <Notification message={message} result={oct} errorMessage={errorMessage} />
            </div>
            </div>
        </div>
    )
}
export default DecToOctCon