import React from 'react'
import '../css/Style.css'
import {Container,Row,Col} from 'react-bootstrap'
import ethicImage from '../../assets/img/our-ethics.png'
import innovationImage from '../../assets/img/innovations.png'
import responbilityImage from '../../assets/img/responsibility.png'
export const TravelTrip2 = () => {
  return (
    <div className="travel-experience  travel-experience-reverse">
    <Container>
        
        <Row>
            <Col md={12}lg={6}>
                <div className="conten-left-travel">
                <h1>
                The Best Early <br />
                <span>Travel Experience</span>
                </h1>
                <p>
                We offer a wide range of services and have many choices of
                travel packages to accompany your trip. In addition, we also
                uphold corporate values.
              </p>
                </div>
            </Col>
            <Col md={12}lg={6} className='right-travel-experience'>
                <div className="box box-our-ethics">
                    <div className="up-side">
                        <h6>
                        <img src={ethicImage} class="me-2" alt="Our Ethics" />Our Ethics
                        </h6>
                    </div>
                    <div className="down-side">
                        <p>Prioritizing Happy Traveling, Upholding Culture</p>
                    </div>
                 </div>  
                
                <div className="box box-innovations">
                    <div className="up-side">
                    <h6>
                  <img
                    src={innovationImage}
                    class="me-2"
                    alt="Innovations" />Innovations
                </h6>
                    </div>
                    <div className="down-side">
                    <p>Innovating in Service to Our Travel Customers</p>
                    </div>
                </div>

                <div className="box box-responsibility">
                    <div className="up-side">
                    <h6>
                  <img
                    src={responbilityImage}
                    class="me-2"
                    alt="Responbillity" />Responsibility
                </h6>
                    </div>
                    <div className="down-side">
                    <p>Trusted And Experienced Travel Management</p>
                    </div>
                </div>
            </Col>
        </Row>
        
    </Container>
    </div>
  )
}

export default TravelTrip2
