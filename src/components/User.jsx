import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col, Form, Button } from 'react-bootstrap'
import UserImg from '../Assets/user.png'


function User({register}) {
    const registerForm = register?true:false
  return (
    <>
    <div style={{width:'100%',height:'100vh'}} className='d-flex align-items-center justify-content-center bg-success'>
        <div className='w-75 container'>
        <h5 ><Link to={'/'} style={{textDecoration:'none',fontSize:'11px'}} ><i class="fa-solid fa-arrow-left"></i> Back to Home </Link></h5>
        <div className='card bg-light p-5 rounded'>
            <Row className='align-items-center p-5'>
                <Col lg={6}>
                    <img className='rounded' src={UserImg} width={'400px'} height={'350px'} alt="no img" />
                </Col>
                <Col lg={6}>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <h2 style={{color:'black',fontSize:'40px',textAlign:'center'}}><i class="fa-brands fa-stack-overflow me-2"></i>Project Fair</h2>
                        <h6 className='mt-3 mb-4' style={{fontSize:'8px'}}>
                        {
                            registerForm ? "Sign Up to your Account" : "Sign In to your Account"
                        }
                        </h6>
                        <Form className='w-75'>
                        {
                        registerForm && (
                            <Form.Group className="mb-2">
                            <Form.Control placeholder="Enter Your Name" type="text" style={{ background: 'lightblue' }} className='rounded text-black' />
                            </Form.Group>
                        )}
                            <Form.Group className="mb-2">
                            <Form.Control placeholder="Enter Your Email Id" type="text" style={{ background: 'lightblue' }} className='rounded text-black' />
                            </Form.Group>
                            <Form.Group className="mb-4">
                            <Form.Control placeholder="Enter Your Password" type="password" style={{ background: 'lightblue' }} className='rounded text-black' />
                            </Form.Group>
                            {
                                registerForm?
                                <div>
                                    <Button style={{marginLeft:'100px'}} className='rounded mb-2'>Register</Button>
                                    <p className='text-center'>Already a User, Click here to <Link to={'/login'} style={{textDecoration:'none',fontWeight:'600'}}>Log In</Link> </p>
                                </div>
                                :
                                <div>
                                    <Button style={{marginLeft:'80px'}} className='rounded mb-2'>Create Account</Button>
                                    <p className='text-center'>New User, Click here to <Link to={'/register'} style={{textDecoration:'none',fontWeight:'600'}}>Register</Link> </p>
                                </div>
                            }
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    </div>
    </>
  )
}

export default User