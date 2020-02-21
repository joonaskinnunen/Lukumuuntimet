import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = (props) => {
    if(props.message.length > 0) {
        return (
            <Alert variant="success">
                <Alert.Heading>{props.result}</Alert.Heading>
                <p>
                <b>{props.message}</b>
                </p>
            </Alert>
        )
    } else if (props.errorMessage.length > 0) {
        return (
        <Alert variant="danger">
            <Alert.Heading>{props.result}</Alert.Heading>
            <p>
            <b>{props.errorMessage}</b>
            </p>
        </Alert>
        )
    } else {
        return null
    }
}

export default Notification
