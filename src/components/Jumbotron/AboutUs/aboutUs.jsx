import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import {BsArrowRightCircle} from 'react-icons/bs'
import hero1Image from '../../../assets/img/about-us-border-hero.png'
import hero2Image from '../../../assets/img/register_login.png'
function AboutUs() {
  return (
    <>
   <Container>
        <div className="Hero aboutus">
        <Row>
            {/* <div className='d-flex justify-content-center align-items-center'> */}
            <Col md={8}>
            <div className='left'>
            <h1>Exploring Wonderful Indonesia</h1>
            <p>At Wonderful Indonesia, we believe that travel should be an
                unforgettable experience, and we're dedicated to making sure
                that every moment you spend with us is one to remember. So why
                wait? Book your adventure today and discover the magic of
                Indonesia.</p>
            <Button variant='outline'>Expolore Now <i><BsArrowRightCircle/></i></Button>
            </div>
            </Col>
            <Col md={4} className='right-about'>
            <div class="about-us-border-hero">
              <img src={hero1Image} alt="" />
            </div>
            <div class="about-us-image-hero">
              <img src={hero2Image} alt="" />
            </div>
            </Col>
            {/* </div> */}
        </Row>
        </div>
    </Container>
    </>
  )
}

export default AboutUs