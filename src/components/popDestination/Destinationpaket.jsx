import React, { useState } from 'react'
import { Button, Col, Collapse, Container,Row} from 'react-bootstrap'
import {ImMap2} from 'react-icons/im'
import {GoLocation} from 'react-icons/go'
import {AiFillStar,AiOutlineCar} from 'react-icons/ai'
import {GrMapLocation} from 'react-icons/gr'
import candiImage from '../../assets/img/candiborobudur.jpg'
import bromoImage from '../../assets/img/gunungbromo.jpg'
import komodoImage from '../../assets/img/pulaukomodo.jpg'
import lombokImage from '../../assets/img/pulaulombok.jpg'
function Destinationpaket() {
    const [open,setOpen] = useState (true);
    const [open1,setOpen1] = useState(true);
    const imgs=[
        {id:0,value:candiImage},
        {id:1,value:bromoImage},
        {id:2,value:komodoImage},
        {id:3,value:lombokImage}
    ];
    const [sliderData,setSliderData] = useState (imgs[0])
    const handleClick=(index)=>{
        console.log(index);
        const slider = imgs[index];
        setSliderData(slider);
    }
  return (
    <>
    <Container>
        <div className="private-paket mt-4">
        <Row>
            <h1>Nusa Penida, Kelungkung, Bali</h1>
            <Row>
               <Col md={3}><i><ImMap2/></i><span>Island/Adventure</span></Col>
               <Col md={3}><i><GoLocation/></i><span>Bali, Indonesia</span></Col>
            </Row>
        </Row>
        <Row>
            <Col md={8}>
            <div className="img-fluid">
                <img src={sliderData.value} alt="" />
            </div>
            <div className="img-click d-flex justify-content-between align-items-center">
            {
                imgs.map((data,i)=>
                
                <img key={data.id} src={data.value} onClick={()=>handleClick(i)} alt=""/>
                
                )
            }
            </div>
            </Col>
            <Col md={4}>
            <div className="box-price">
                <div className="tittle">
                    <h3>Destination overview</h3>
                </div>
                <div className="price-tittle d-flex justify-content-between">
                    <div className="city">
                        <h4>Nusa Penida, Bali</h4>
                        <p>60 reviews</p>
                    </div>
                    <div className="star">
                        <i><AiFillStar/><span>4.5</span></i>
                    </div>
                    </div>
                    <div className="price-city">
                        <h4>Rp. 1.000.000 / Pax</h4>
                    </div>
                    <Button> Book Now</Button>
                    <hr/>
                    <p>Specials offer for new traveler 15 % off. Valid until 5 August 2023</p>
                
            </div>
            </Col>
        </Row>
        <Row className='mt-5'>
            <Col md={8}>
            <div className="conten-detail">
                <Button
                onClick={()=>setOpen (!open)}
                aria-controls='example-collapse-text'
                aria-expanded={open}
                >Description</Button>
                <Button
                onClick={()=>setOpen1 (!open1)}
                aria-controls='example-collapse-text2'
                aria-expanded={open}
                >What’s include</Button>
                <Collapse in={open}>
                <div id="example-collapse-text">
                    <p>
                         If you're planning a trip to Bali, you might want to consider a visit to Nusa Penida. This beautiful island is located southeast of Bali and is known for its stunning beaches, crystal clear waters, and picturesque landscapes. In this article, we'll take
                         a closer look at Nusa Penida and provide you with some tips for planning your trip.
                         <br /><br /> The easiest way to get to Nusa Penida is to take a fast boat from Sanur or Padang Bai. The journey takes approximately 45 minutes to 1 hour, depending on the sea conditions. You can also take a ferry from
                        Padang Bai, which is cheaper but takes longer.
                    </p>
                </div>
                </Collapse>
                <Collapse in={open1}>
                <div id="example-collapse-text2">
                    <div className="acomodation">
                        <span><i><AiOutlineCar/></i>Acomodation</span>
                        <p>
                            Nusa Penida has a variety of accommodations to choose from, ranging from budget-friendly guesthouses to luxury resorts. Some popular options include:
                            <li>Semabu Hills Hotel Nusa Penida</li>
                            <li>Daphila Cottage</li>
                            <li>La Roja Bungalows</li>
                            <li>Nusa Veranda Sunset Villas & Restaurant</li>
                         </p>
                    </div>
                    <div class="destination-icon">
                            <span><i><GrMapLocation/></i>Destination</span>
                            <li>Visit Kelingking Beach</li>
                            <li>Explore Angel's Billabong</li>
                            <li>Snorkel at Crystal Bay</li>
                            <li>Visit Broken Beach</li>
                    </div>
                </div>
                </Collapse>
            </div>
            </Col>
        </Row>
        </div>
    </Container>
    </>
  )
}

export default Destinationpaket