import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import travelarkLogo from '../../assets/img/travelark_navbar.png'
import '../css/Style.css';

function Header() {
  return (
    <>
    <Navbar expand="lg" className='pt-3'>
      <Container>
        <Navbar.Brand href="/">
        <img
              src={travelarkLogo}
              className="d-inline-block align-top"
              alt="TravelArk logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
            <Nav.Link to="/Discovery" className='nav-Link  px-3'>Discovery</Nav.Link>
            <Nav.Link href="/Destination" className='nav-Link px-3'>Destination</Nav.Link>
            <Nav.Link href="/Package" className='nav-Link px-3'>Package</Nav.Link>
            <Nav.Link href="#link" className='nav-Link px-3'>About Us</Nav.Link>
          </Nav>
            <Button className='btn-navbar'>Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;