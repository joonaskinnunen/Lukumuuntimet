import React, { useState, useEffect } from 'react'
import { Breadcrumb, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import axios from 'axios'

const ContactForm = () => {
    const [values, setValues] = useState({email: '', message: ''})
    const [validated, setValidated] = useState(false)

    useEffect(() => {
        document.title = 'Ota yhteyttä - Laske & Muunna'
    })

    const handleEmailChange = (value) => {
        setValues({ ...values, email: value })
    }

    const handleMessageChange = (value) => {
        setValues({ ...values, message: value })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        console.log(form)
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            axios({
                method: "POST", 
                url:"http://localhost:3001/send", 
                data: values
              }).then((response)=>{
                if (response.data.status === 'success'){
                  console.log("Viesti lähetetty.") 
                  this.resetForm()
                } else if(response.data.status === 'fail'){
                  console.log("Viestin lähettäminen epäonnistui.")
                }
              })
        }

        setValidated(true);
    };

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
            <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Sähköpostiosoite</Form.Label>
                        <Form.Control required type="email" placeholder="Syötä sähköpostiosoite" value={values.email} onChange={({ target }) => handleEmailChange(target.value)}/>
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
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Viesti</Form.Label>
                        <Form.Control required as="textarea" rows="3" placeholder="Kirjoita viestisi tähän" value={values.message} onChange={({ target }) => handleMessageChange(target.value)}/>
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
        </div>
    )
}

export default ContactForm