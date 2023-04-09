import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import baliImage from '../../assets/img/nusa.jpg'
import bromoImage from '../../assets/img/gunungbromo.jpg'
import candiImage from '../../assets/img/candiborobudur.jpg'
import komodoImage from '../../assets/img/pulaukomodo.jpg'
export  function WonderDestination() {
  return (
<Container>
    <div className="conten wonderful-package-martop">
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
  )
}
export default WonderDestination