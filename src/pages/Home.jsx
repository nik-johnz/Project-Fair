import React from 'react'
import { Row,Col } from 'react-bootstrap'
import titleImage from '../Assets/desiner.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Header/>
    <div className='mb-5' style={{width:'100%',height:'100vh',cursor:'pointer'}}>
      <div className="container-fluid rounded">
        <Row className='align-items-center ms-5 p-5'>
          <Col md={6}>
            <h1 className='text-black mt-5' style={{fontSize:'70px'}}>Project Fair</h1>
            <p className='text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className='btn btn-success p-2 rounded mt-3'>Get Started <i class="fa-solid fa-arrow-right ms-1"></i></button>
          </Col>
          <Col md={6} style={{marginTop:'10px'}}>
            <img className='rounded mb-5 ms-5' src={titleImage} alt="no image" />
          </Col>
        </Row>
      </div>
    </div>
    {/* section for all projects */}
    <div style={{width:'100%',height:'100vh'}} className="all-project mt-5">
      <div className="text-center">
        <h1>Explore Our Projects</h1>
        <marquee scrollAmount={20} className="mt-5">
        <div className="d-flex">
          <div className="ms-5 mb-5" style={{width:'400px'}}>
            <ProjectCard/>
          </div>
          <div className="ms-5 mb-5" style={{width:'400px'}}>
            <ProjectCard/>
          </div>
          <div className="ms-5 mb-5" style={{width:'400px'}}>
            <ProjectCard/>
          </div>
        </div>
        </marquee>
        <div className="text-center mt-5">
          <h5><Link to={'/projects'} style={{textDecoration:'none'}} >See More Projects <i class="fa-solid fa-arrow-right"></i></Link></h5>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home