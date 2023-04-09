import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../css/Style.css'
import baliImage from '../../assets/img/nusa.jpg'
import bromoImage from '../../assets/img/gunungbromo.jpg'
import candiImage from '../../assets/img/candiborobudur.jpg'
import komodoImage from '../../assets/img/pulaukomodo.jpg'
// import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'

export const pickDestinationSlider = () => {
  return (
    <Container className='mt-5'>
        <div className="conten">
        <Row className='justify-content-between align-items-center'>
            <Col>
            <h4>Related</h4>
            <h1>Destination may you liked</h1>
            </Col>
        </Row>
        <Row className='mt-3 main-scrol justify-content-between align-items-center'>
       
            <Col md={12} className='d-flex justify-content-between align-items-center'>
            {/* <div className='img-scrol1' >
            <div className="icons">
                <i>
                    <BsChevronDoubleLeft/>
                </i>
            </div>
            </div> */}
            {/* <div className="main-scrol"> */}
            <Col md={3} className='img-box'>
                <img src={baliImage} alt="" />
                <h2>Nusa Penida</h2>
                <p>Kelungkung Bali</p>
            </Col>
            <Col md={3} className='img-box'>
                <img src={candiImage} alt="" />
                <h2>Candi Borobudur</h2>
                <p>Jawa Timur</p>
            </Col>
            <Col md={3} className='img-box'>
                <img src={komodoImage} alt="" />
                <h2>Pulau Komodo</h2>
                <p>NTT</p>
            </Col>
            <Col md={3} className='img-box'>
                <img src={bromoImage} alt="" />
                <h2>Gunung Bromo</h2>
                <p>Jawa Tengah</p>
            </Col>
            <Col md={3} className='img-box'>
                <img src={bromoImage} alt="" />
                <h2>Gunung Bromo</h2>
                <p>Jawa Tengah</p>
            </Col>
            {/* </div> */}
            {/* <div className='img-scrol2'>
                <div className="icons"><i><BsChevronDoubleRight/></i></div>
            </div> */}
            </Col>
            
        </Row>
        </div>
    </Container>
  )
}
export default pickDestinationSlider