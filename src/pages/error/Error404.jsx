import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Breadcrumb, Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Error404() {
  return (
    <div>
      <Container style={{display:'flex',justifyContent:'space-between' ,alignContent:'flex-end'}}>
        <div style={{fontSize:'25px',fontWeight:'bold'}}>Page Not Found</div>
        <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Pages
      </Breadcrumb.Item>
      <Breadcrumb.Item active>404</Breadcrumb.Item>
    </Breadcrumb>
      </Container>
      <div>
        <div style={{fontSize:'100px',fontWeight:'bold'}}>404</div>
        <div style={{fontSize:'25px',fontWeight:'bold'}}>oops! The page you requested was not found!</div>
        <div style={{fontSize:'25px',color:'gray'}} >The page you are looking for was moved, removed, renamed or might never existed.</div>
      </div>
      <div > <Form style={{display:"flex"}} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           <Button variant='light'> <FontAwesomeIcon style={{borderBlock:"1px"}} icon={faMagnifyingGlass} /> </Button>
          </Form>
         <Link to="/fashionHome"><Button  variant="outline-success danger">Back Home</Button></Link> 
          </div>
    </div>
    
  )
}
