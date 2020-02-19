import React from 'react';
import BinaryConverter from './BinaryConverter'

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
            <BinaryConverter />
        </div>
    )
}

export default Math