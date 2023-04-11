import React from 'react'
import '../css/Style.css'
import {Container,Row,Col} from 'react-bootstrap'
function DiscountTrip(){
  return (
    <Container>
        <div className="get-first-trip-discovery">
            <div className="down-side-conten">
                <Row className=' down-side-rows'>
                    <Col md={9} className='left-down-side'>
                        <h1>Get 15% <span>for your</span> first trip</h1>
                        <p>
                            Attention all first-time travelers! We're excited to offer an
                            exclusive discount just for you. Book your first trip with us
                            today and receive 10% off your entire journey.
                        </p>
                    </Col>
                    <Col md={3} className='right-down-side'>
                        
                        <button type="button" class="btn button">Get Started</button>
                    </Col>
                </Row>
            </div>
        </div>
    </Container>
  )
}
export default DiscountTrip
