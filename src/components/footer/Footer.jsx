import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import footerLogo from '../../assets/img/footer-travelark.png'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <div className="footer-conten">
                <div className="up-side-footer d-flex pt-5">
                    <div className="menu pe-4">
                        <h6>Menu</h6>
                        <ul>
                            <Link><li>Discovery</li></Link>
                            <Link><li>Destination</li></Link>
                            <Link><li>Package</li></Link>
                            <Link><li>About Us</li></Link>
                        </ul>
                    </div>
                    <div className="features px-4">
                        <h6>Features</h6>
                        <ul>
                            
                            <li>
                            <Link to='/OpenTrip'>Open Trip</Link>    
                            </li>
                            <li>
                                <Link to='/PrivateTrip'>Private Trip</Link>
                            </li>
                            <li>
                            <Link to='/PackageDestination'>Destination Trip</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="travelark px-4">
                        <h6>Travelark</h6>
                        <ul>
                            <Link><li>Need Help</li></Link>
                            <Link><li>Business Inquiry</li></Link>
                            <Link><li>Who we are</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="down-side-footer ">
                    <div className="left">
                        <img src={footerLogo} alt=""  className='travelark-orange-logo'/>
                        <h6>Jakarta, Indonesia</h6> 
                    </div>
                    <div className="right">
                        <div className="icons">
                            <Link><i className='px-2'><BsYoutube/></i></Link>
                            <Link><i className='px-2'><BsFacebook/></i></Link>
                            <Link><i className='px-2'><BsInstagram/></i></Link>
                        </div>
                        <p>Copyright © 2023 Travelark. Indonesia</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
export default Footer
