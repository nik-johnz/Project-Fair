import React from 'react'
import { Card, ModalHeader, ModalTitle } from 'react-bootstrap'
import projectImage from '../Assets/projectImage.png'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Row,Col } from 'react-bootstrap'

function ProjectCard() {

    const [show, setShow] = useState(false);

    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);
  return (
    <>
    <Card style={{width:'100%',cursor:'pointer'}} className='border shadow rounded text-center' onClick={handleShow}>
        <Card.Img variant='top' style={{height:'300px'}} className='p-3' src={projectImage} alt='no img'/>
        <Card.Body>
            <Card.Title>Project Name</Card.Title>
        </Card.Body>
    </Card>

    <Modal style={{width:'100%',cursor:'pointer'}} show={show} onHide={handleClose} backdrops="static" keyboard={false} size='lg'>
        <Modal.Header closeButton>
            <Modal.Title>Project Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img className='rounded' width={'100%'} height={'250px'} src={projectImage} alt="no image" />
                </Col>
                <Col md={6}>
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto facere odit veniam aliquam, est alias! Architecto facere odit veniam aliquam, est alias!</p>
                    <p><span style={{fontWeight:'900',color:'black'}}>Technologies</span> : HTML, CSS, REACT</p>
                </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3 mb-3">
                <a href="https://github.com/nik-johnz/media-player" target='_blank' style={{color:'black'}}> 
                <i class="fa-brands fa-github fa-2x me-5"></i> </a>
                <a href="https://mediaplayer-nik-johnz.vercel.app/" target='_blank' style={{color:'black'}}> 
                <i class="fa-solid fa-link fa-2x me-5"></i> </a>
            </div>
        </Modal.Body>
    </Modal>

    </>
  )
}

export default ProjectCard