import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import {BsArrowRightCircle} from 'react-icons/bs'
import hero1Image from '../../../assets/img/hero-destination-1.jpeg'
import hero2Image from '../../../assets/img/hero-destination-2.jpg'
import hero3Image from '../../../assets/img/hero-destination-3.jpg'
function Destination(){
  return (
    <Container>
        <div className="Hero">
        <Row>
            <Col md={8}>
            <div className="left left-hero">
                <h1>Wonderful Destination Trip</h1>
                <p>With its stunning landscapes, vibrant cities, and rich history, 
                Destination trip has something for everyone. Explore ancient ruins and towering mountains, 
                relax on pristine beaches and turquoise waters, or indulge in local cuisine and vibrant nightlife.</p>
                <Button variant='outline'>Expolore Now <i><BsArrowRightCircle/></i></Button>
            </div>
            </Col>

            <Col md={4}>
            <div className="right right-hero">
                <div className='one-box-hero-destination'></div>
                <div className='hero-destination-1'>
                    <img src={hero1Image} alt="HeroImage1" />
                </div>
                <div className='hero-destination-2'>
                    <img src={hero2Image} alt="HeroImage2" />
                </div>
                <div className="hero-destination-3">
                    <img src={hero3Image} alt="HeroImage3" />
                </div>
            </div>
            </Col>
        </Row>
        </div>
    </Container>
  )
}
export default Destination