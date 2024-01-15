import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import {useState} from 'react';
import './BasicExample.css';



function BasicExample() {

   const navigate = useNavigate(); 
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const nav = () => {
        navigate('/cards')
    }
    const igm = () => {
        navigate('/dashBoard')
    }
    const fom = () => {
      navigate('/login')
  }

  const comp = () => {
    navigate('/companies')
  }

  const counter = () => {
    navigate('/counter')
}
    return (
      <>
    <Navbar expand="lg" className="bg-body-tertiary mainna" id='mainnav'>
      <Container fluid>
        <Navbar.Brand href="#">
        <img  src="https://static.vecteezy.com/system/resources/previews/010/158/131/original/house-symbol-home-icon-sign-design-free-png.png"
              width="30"
              height="27"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              onClick={igm}
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button className='bar prim' onClick={nav}>Trainers<AiFillCaretDown/></Button>
            <Button className='bar prim' onClick={comp}>Companies<AiFillCaretDown/></Button>
            <Button className='bar prim' onClick={counter}>Contact Us<AiFillCaretDown/></Button>
          
            <div style={{width:"45rem",fontSize:"1.3rem",color:"#427d9d"}} className='mt-2'>
          <marquee className="Wel">🧑🏻‍💻Welcome to Trainers Managment System🧑🏻‍💻</marquee>
          </div>
          </Nav>
          
          <div className="navbar-container">
              <div className={`icon-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <p className='slide'>Add Trainer</p>
                  <p className="icon" onClick={fom}><AiFillPlusCircle size={35} /></p>
              </div>
     
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <DashBoard /> */}
    </>
  );
}

export default BasicExample;