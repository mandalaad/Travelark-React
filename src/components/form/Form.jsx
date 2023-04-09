import React from 'react'
import { Col, Container, Row,Form, Button } from 'react-bootstrap'

function FormContact() {
  return (
    <Container>
        <div className="conten">
            <Row>
                <Col className=' wonderful-title px-5 text-center'>
                    <h1>Need our help?</h1>
                    <h5>Contact us freely to get any information you need</h5>
                </Col>
            </Row>
            <Row>
                <div className="contact px-5">
                <Form>
                    <Row className="mb-3">
                         <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" />
                         </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" />
                         </Form.Group>
                     </Row>

                        <Form.Group className="mb-3" controlId="formGridPhonenumber">
                        <Form.Label>Phone number</Form.Label>
                         <Form.Control type="text" />
                         </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.Message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                </Form>
                </div>
            </Row>
        </div>
    </Container>
  )
}

export default FormContact