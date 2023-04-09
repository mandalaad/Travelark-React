import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {  BsBuildingsFill, BsCalendar2Check, BsPeople} from 'react-icons/bs'
import baliImage from '../../assets/img/nusa.jpg'
import bromoImage from '../../assets/img/gunungbromo.jpg'
import candiImage from '../../assets/img/candiborobudur.jpg'
import komodoImage from '../../assets/img/pulaukomodo.jpg'
export  function solotravelGreen() {
  return (
    <div className="conten-fluid mar-top">
    <Container>
        
            <div className='conten private-trip-experience-martop conten-fluid-pad-top'>
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
        <div className="conten wonderful-package-martop conten-fluid-pad-bot">
        <Row>
            <Col>
                <div className='wonderful-title px-5 text-center'>
                    <h1>Wonderful Place</h1>
                    <h5>Any destination you want</h5>
            </div>
        </Col>
        </Row>
        <Row className='flex-wrap justify-content-center'>
            <Col md={3} sm={6} className='img-box'>
                <img src={baliImage} alt="" />
                <h2>Nusa Penida</h2>
                <p>Kelungkung Bali</p>
            </Col>
            <Col md={3} sm={6}className='img-box'>
                <img src={candiImage} alt="" />
                <h2>Candi Borobudur</h2>
                <p>Jawa Timur</p>
            </Col>
            <Col md={3} sm={6}className='img-box'>
                <img src={komodoImage} alt="" />
                <h2>Pulau Komodo</h2>
                <p>NTT</p>
            </Col>
            <Col md={3} sm={6}className='img-box'>
                <img src={bromoImage} alt="" />
                <h2>Gunung Bromo</h2>
                <p>Jawa Tengah</p>
            </Col>
        </Row>
    </div>
      
    </Container>
    </div>
  )
}
export default solotravelGreen
