import React from 'react'
import { Container,Row,Col,Button, } from 'react-bootstrap'
import { BsArrowRightCircle } from 'react-icons/bs'
import hero1Image from '../../../assets/img/gambar1.jpg'
import hero2Image from '../../../assets/img/gambar2.jpg'
import hero3Image from '../../../assets/img/gambar3.jpg'

function Package() {
  return (
    <Container>
        <div className="Hero">
        <Row>
            <Col md={8}>
            <div className='left'>
            <h1>Travel Package</h1>
                        <p>
                            Looking for the perfect travel package? Look no further! 
                            We offer both open trips and private trips to [Destination], 
                            so you can choose the option that best suits your needs.
                        </p>
            <Button variant='outline'>Expolore Now 
                <i>
                <BsArrowRightCircle/>
                </i>
                </Button>
            </div>
            </Col>
            <Col md={4} className='right-hero'>
            <div class="one-box"></div>
                    <div class="two-box"></div>
                    <div class="three-box">
                        <img src={hero1Image} alt="Hero1" />
                    </div>
                    <div class="four-box">
                        <img src={hero2Image} alt="Hero2" />
                    </div>
                    <div class="five-box">
                        <img src={hero3Image} alt="Hero3" />
                    </div>
            </Col>
            
        </Row>
        </div>
    </Container>
  )
}

export default Package