import React, { useState } from 'react'
import { Button, Col, Container,Row, Tab, Tabs} from 'react-bootstrap'
import {ImMap2} from 'react-icons/im'
import {GoLocation} from 'react-icons/go'
import {AiFillStar,AiOutlineCar} from 'react-icons/ai'
import {GrMapLocation} from 'react-icons/gr'
import {FaAward} from 'react-icons/fa'
import candiImage from '../../assets/img/candiborobudur.jpg'
import bromoImage from '../../assets/img/gunungbromo.jpg'
import komodoImage from '../../assets/img/pulaukomodo.jpg'
import lombokImage from '../../assets/img/pulaulombok.jpg'
import baliImage from '../../assets/img/nusa.jpg'
function Privatepaket() {
    const [key,setKey] = useState ('text1');
    const imgs=[
        {id:0,value:candiImage},
        {id:1,value:bromoImage},
        {id:2,value:komodoImage},
        {id:3,value:lombokImage},
        {id:4,value:baliImage}
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
            <h1>Bali</h1>
            <Row>
               <Col md={2}><i><ImMap2/></i><span>Island/Adventure</span></Col>
               <Col md={2}><i><GoLocation/></i><span>Bali, Indonesia</span></Col>
               <Col md={2}><i><GoLocation/></i><span>Private Trip</span></Col>
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
                            <span>Price</span>
                            <h4>Rp. 2.500.000 / Pax</h4>
                            <br />
                            <span>Recommend Duration</span>
                            <h4>4 Days 3 Nights</h4>
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
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={
                (k) => setKey(k)
            }>
                <Tab eventKey='text1' title="Description">
                <div id="controlled-tab-example">
                    <p>
                         If you're planning a trip to Bali, you might want to consider a visit to Nusa Penida. This beautiful island is located southeast of Bali and is known for its stunning beaches, crystal clear waters, and picturesque landscapes. In this article, we'll take
                         a closer look at Nusa Penida and provide you with some tips for planning your trip.
                         <br /><br /> The easiest way to get to Nusa Penida is to take a fast boat from Sanur or Padang Bai. The journey takes approximately 45 minutes to 1 hour, depending on the sea conditions. You can also take a ferry from
                        Padang Bai, which is cheaper but takes longer.
                    </p>
                </div>
                </Tab>
                <Tab eventKey='text2' title="What's include">
                <div id="controlled-tab-example">
                    <div className="feauter-trip">
                        <span><i><FaAward/></i>Featured Trip</span>
                        <p>
                            What you can get in private trip package:
                            <li>Customize Acomodation</li>
                            <li>Any destination you want</li>
                            <li>Trip with private group or solo trip</li>
                            <li>Create any event you want (Gathering, Games, Meetings, etc.)</li>
                            <li>1 Day free (include vehicle)</li>
                            <li>Guided by our agents</li>
                        </p>
                    </div>
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
                </Tab>
                </Tabs>
            </div>
            </Col>
        </Row>
        </div>
    </Container>
    </>
  )
}

export default Privatepaket