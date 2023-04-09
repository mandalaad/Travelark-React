import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {  BsBuildingsFill, BsCalendar2Check, BsPeople} from 'react-icons/bs'
export default function solotravel() {
  return (
    <Container>
        <div className="conten wonderful-package-martop">
        <Row>
            <Col>
            <div className='most-text'>
                <h4>Solo Traveler</h4>
                <h2>Private Trip Experience</h2>
            </div>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col md={6}>
            <div className="conten-button">
                <Button type='button' className='btn btn-success'><i><BsCalendar2Check /></i>Choose your own date</Button>
                <Button type='button' className='btn btn-success'><i><BsPeople/></i>Solo or intimate group</Button>
                <Button type='button' className='btn btn-success'><i><BsBuildingsFill/></i>Custom destination</Button>
            </div>
            </Col>
            <Col md={6}>
                    <p class="text-conten">
                        Our team of experts will work with you to create a custom itinerary based on your interests, preferences, and travel style. Whether you're interested in exploring the local culture, indulging in delicious cuisine, or embarking on an adventurous outdoor
                        excursion, we'll create a trip that's tailored to your specific needs.
                    </p>
            </Col>
        </Row>
        </div>
    </Container>
  )
}
