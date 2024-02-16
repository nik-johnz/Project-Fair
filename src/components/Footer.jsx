import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{background:'yellowgreen',cursor:'pointer'}} className='d-flex justify-content-center align-items-center w-100 flex-column p-4'>
      <div className="footer d-flex align-item-center justify-content-evenly w-100">
        <div className="websites" style={{width:'350px'}}>
        <h4 className='mb-3' ><i class="fa-brands fa-stack-overflow me-1"></i>{' '}Project Fair</h4>
        <h6 style={{textDecoration:'none',color:'black',fontWeight:'300'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic temporibus perferendis. Quia reiciendis amet quae beatae illum id eius!</h6>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}>Home </Link>
          <Link to={'/projects'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}>Projects</Link>
          <Link to={'/register'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}>Register</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4 className='mb-3'>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}>React-Bootstrap</Link>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}>Bootswatch</Link>
        </div>
        <div className="contacts">
          <h4 className='mb-3'>Contacts</h4>
          <div className="d-flex">
            <input type="email"  className='form-control rounded' placeholder='Enter your e-mail ID' required/>
            <button className='btn ms-2 rounded border-1 text-danger' style={{background:'yellow',padding:'10px'}}>Subscribe</button>
          </div>
          <div className="d-flex justify-content-evenly align-items-center mt-3">
          <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://www.twitter.com/'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none',ccolor:'black',fontWeight:'300'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'black',fontWeight:'300'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-4 text-dark'>Copyright © 2023 Project Fair. Build with React</p>
    </div>
  )
}

export default Footer