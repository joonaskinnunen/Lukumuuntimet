import React, { useState, useEffect, useRef } from 'react'
import { Breadcrumb, Form, Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import axios from 'axios'
import Notification from './Notification'

const ContactForm = () => {
    const [values, setValues] = useState({ name: '', email: '', message: '' })
    const [notificationMessages, setNotificationMessages] = useState({ notificationMessage: '', notificationErrorMessage: ''})
    const [validated, setValidated] = useState(false)
    const formRef = useRef(null)

    useEffect(() => {
        document.title = 'Ota yhteyttä - Laske & Muunna'
    })

    const formDivStyle = {
        margin: '20px'
    }

    const handleReset = () => {
        formRef.current.reset()
        setValidated(false)
    }
    const handleEmailChange = (value) => {
        setValues({ ...values, email: value })
    }

    const handleMessageChange = (value) => {
        setValues({ ...values, message: value })
    }

    const handleNameChange = (value) => {
        setValues({ ...values, name: value })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            axios({
                method: "POST",
                url: "https://www.laskejamuunna.fi/send",
                data: values
            }).then((response) => {
                if (response.data.status === 'success') {
                    console.log("Viesti lähetetty.")
                    setNotificationMessages({notificationErrorMessage: '', notificationMessage: 'Viestin lähetys onnistui. Kiitos viestistäsi!'})
                    setValues({ name: '', email: '', message: '' })
                    setTimeout(() => setNotificationMessages({notificationErrorMessage: '', notificationMessage: ''}), 10000)
                    console.log(notificationMessages)
                } else if (response.data.status === 'fail') {
                    console.log(response.data)
                    console.log("Viestin lähettäminen epäonnistui.")
                    setNotificationMessages({notificationErrorMessage: 'Viestin lähettäminen epäonnistui.', notificationMessage: ''})
                    setTimeout(() => setNotificationMessages({notificationErrorMessage: '', notificationMessage: ''}), 10000)
                }
            })
        }

        setValidated(true)
        handleReset()
    }

    return (
        <div>
            <Breadcrumb>
                <LinkContainer to="../">
                    <Breadcrumb.Item>
                        Alkuun
                    </Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>
                    Ota yhteyttä
                </Breadcrumb.Item>
            </Breadcrumb>
            <h2>
                Ota yhteyttä
            </h2>
            <p>
                Kehitysehdotuksia? Huomasitko virheen sivustolla? Voit ottaa yhteyttä sivuston ylläpitoon alla olevalla lomakkeella.
            </p>
            <div style={formDivStyle}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
                    <Form.Group>
                        <Form.Label>Nimi</Form.Label>
                        <Form.Control placeholder="Syötä nimesi" required value={values.name} onChange={({ target }) => handleNameChange(target.value)}/>
                        <Form.Control.Feedback>
                            Hyvältä näyttää!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Syötä nimesi
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sähköpostiosoite</Form.Label>
                        <Form.Control required type="email" placeholder="Syötä sähköpostiosoite" value={values.email} onChange={({ target }) => handleEmailChange(target.value)} />
                        <Form.Text className="text-muted">
                            Emme koskaan jaa sähköpostiosoitettasi ulkopuolisille.
                        </Form.Text>
                        <Form.Control.Feedback>
                            Hyvältä näyttää!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Syötä sähköpostiosoite
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Viesti</Form.Label>
                        <Form.Control required as="textarea" rows="3" placeholder="Kirjoita viestisi tähän" value={values.message} onChange={({ target }) => handleMessageChange(target.value)} />
                        <Form.Control.Feedback>
                            Hyvältä näyttää!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Syötä viesti
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Lähetä
                    </Button>
                </Form>
            </div>
            <Notification message={notificationMessages.notificationMessage} errorMessage={notificationMessages.notificationErrorMessage}/>
        </div>
    )
}

export default ContactForm