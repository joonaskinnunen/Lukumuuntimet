import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    const style = {
        backgroundColor: '#5a5a5a',
        marginTop: '30px',
        padding: '20px',
        color: '#fafafa',
        borderTop: '10px solid #e9eaee'
    }

    return (
        <Row style={style}>
            <Col>
            ©2020 Laske & Muunna
            </Col>
        </Row>
    )
}

export default Footer