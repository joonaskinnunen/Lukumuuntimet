import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

const Math = () => {
    return (
        <div>
            <Breadcrumb>
                <LinkContainer to="../">
                <Breadcrumb.Item>
                Alkuun
                </Breadcrumb.Item>
                </LinkContainer>
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