import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ButtonGroup, Container, InputGroup } from 'react-bootstrap';

export default function Login() {
 
  return (
    <Container style={{border:"1px ", marginTop:"100px", padding:"20px",boxShadow:"5px 5px 10px rgb(235 235 235)",borderRadius:"10px"}}>
    <Form className='mb-3' style={{ margin:"auto", padding:"20px"}}>
      <Form.Label style={{fontSize:"30px", fontWeight:"bold"}}>Login</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Enter Password"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      <Form.Group style={{display:"flex",gap:"5" }} className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  />
        <p className="mb-3">Remember Me</p>

      </Form.Group>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Button variant="link" className='nav-link bg-white text-black rounded p-2' type="button" style={{marginLeft:"20px"}}>
        Forgot Password?
      </Button>
      <ButtonGroup style={{marginTop:"20px"}}>
      <Button variant="link" type="button" className='nav-link bg-red text-white rounded p-2' style={{marginLeft:"20px", background:"red", fontWeight:"bold",border:"1px solid white"}}>
         Google
      </Button>
      <Button variant="link" type="button" className='nav-link bg-blue  rounded p-2' style={{marginLeft:"20px", background:"blue", fontWeight:"bold",border:"1px solid white"}}>
         Facebook
      </Button>
      </ButtonGroup>
      <Button variant="link" type="button" className='nav-link bg-white text-black rounded p-2' style={{marginLeft:"20px",display:"flex",justifyContent:"space-between",gap:"3"}} >
       <p style={{margin:"2px",padding:"2px"}}>Don't Have Acount?</p><a href="/register" style={{textDecoration:"none", color:"black",margin:"2px",padding:"2px"}}>Sing up now</a>
       
      </Button>
    </Form>
    <div>
      <p></p>
      

    </div>
    </Container>
  );
}

