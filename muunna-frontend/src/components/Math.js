import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Math = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Alkuun</Breadcrumb.Item>
                <Breadcrumb.Item active>
                Matematiikka
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Matemaattiset muuntimet
            </h2>
            <p>
                Matemaattisilla muuntimilla voit muuttaa erilaisia matemaattisia
                yksiköitä toiseen yksikköön.
            </p>
        </div>
    )
}

export default Math