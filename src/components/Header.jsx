import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar style={{background:'yellowgreen',cursor:'pointer'}}>
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none',color:'black',fontSize:'20px'}}>
            <i class="fa-brands fa-stack-overflow me-2"></i>{' '}Project Fair</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header