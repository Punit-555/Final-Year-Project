import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const HeaderComponent = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout(); // Call the onLogout function to update the user state
  };

  const navData = [
    { name: 'Movies', link: '/movies' },
    { name: 'Tv Series', link: '/series' },
    { name: 'Search', link: '/search' },
    { name: 'Music', link: '/music' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <header className='header'>
      <Navbar bg='dark' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: 'Arial, Helvetica, sans-serif',
              }}
            >
              Entertainment App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              {navData.map((item) => (
                <Nav key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </Nav>
              ))}
            </Nav>
            <Button className='logout-button' onClick={handleLogout} variant="contained">Logout</Button>

            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponent;
