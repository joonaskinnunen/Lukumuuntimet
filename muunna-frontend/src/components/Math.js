import React from 'react';
import BinToDecCon from './BinToDecCon'
import DecToBinCon from './DecToBinCon'
import DecToHexCon from './DecToHexCon'

const Math = () => {
    return (
        <div>
            <h2>
                Matemaattiset muuntimet
            </h2>
            <p>
                Matemaattisilla muuntimilla voit muuttaa erilaisia matemaattisia
                yksiköitä toiseen yksikköön.
            </p>
            <BinToDecCon />
            <DecToBinCon />
            <DecToHexCon />

        </div>
    )
}

export default Math