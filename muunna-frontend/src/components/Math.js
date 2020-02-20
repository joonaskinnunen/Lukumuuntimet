import React from 'react';
import BinToDecCon from './BinToDecCon'

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
        </div>
    )
}

export default Math