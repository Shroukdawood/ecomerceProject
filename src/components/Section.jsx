import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Section() {
  return (
    <div>
        <Container className=' mt-5' style={{backgroundColor:"red", padding:"50px",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <h2 style={{color:"white"}}>Subscribe Our Sit</h2>
            <Form>
                <input type="text" placeholder='Enter Your Email' style={{padding:"10px"}} />
                <Button type='submit' style={{backgroundColor:"black" ,color:"white" ,padding:"10px"}}>Subscribe</Button>
            </Form>
        </Container>
    </div>
  )
}
