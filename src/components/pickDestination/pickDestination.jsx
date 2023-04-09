import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import '../css/Style.css'
import baliImage from '../../assets/img/nusa.jpg'
import bromoImage from '../../assets/img/gunungbromo.jpg'
import candiImage from '../../assets/img/candiborobudur.jpg'
import komodoImage from '../../assets/img/pulaukomodo.jpg'

export const pickDestination = () => {
  return (
    <Container className='mt-5'>
        <div className="conten">
        <Row className='justify-content-between align-content-center'>
            <Col>
            <h4>Recomended</h4>
            <h1>Most Picked Destination</h1>
            </Col>
            <Col className='text-end'>
            <Button className='btn-navbar'>See all</Button>
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
export default pickDestination