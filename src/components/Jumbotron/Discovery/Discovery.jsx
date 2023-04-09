import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import image1 from '../../../assets/img/b1.jpg'
import '../../css/Style.css'
import {BsArrowRightCircle} from 'react-icons/bs'
export const Discovery = () => {
  return (
    
    <Container>
        <div className="Hero">
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
            <Col md={4} className='text-end'>
           <div className="banner">
            <img src={image1} alt="" />
           </div>
           <div className="banner1">
            <img src={image1} alt="" />
           </div>
            </Col>
            {/* </div> */}
        </Row>
        </div>
    </Container>
    
  )
}

export default Discovery
