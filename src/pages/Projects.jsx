import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Projects() {
  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center align-items-center flex-column mt-5' style={{cursor:'pointer'}}>
        <h1>All Projects</h1>
        <div className='d-flex mt-5 w-25'>
        <InputGroup className="mb-3">
        <Form.Control placeholder="Search Your Project" aria-label="Username" className='border rounded'/>
        <Button className='rounded ms-2'><i class="fa-solid fa-magnifying-glass fa-beat"></i></Button>
        </InputGroup>
        </div>
    </div>
    <Row className='mt-5 mb-5 container-fluid'>
        <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
        </Col>
    </Row>
    <Footer/>
    </>
  )
}

export default Projects