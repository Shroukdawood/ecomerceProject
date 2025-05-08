import { useFormik } from "formik";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function Register() {
  const registerForm = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      age:'',
      gender:"",
      country:"",
      state:"",
      email:"",
      password:"",
      confirmPassword:"",
      sign:""
    }
  });

   return (
    <div className="container" style={{textAlign:'start'}}>
      <div className='" row justify-content-center '>
        <div className="col-md-6">
          <h2>Registertion</h2>
          <Form 
           onSubmit={registerForm.handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >User Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                 {...registerForm.getFieldProps('username')}
                  
                  placeholder="Enter User Name"
                   isInvalid={registerForm.errors.username }
                />
                <Form.Control.Feedback type="invalid">
                  {registerForm.errors.username && registerForm.touched.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              {...registerForm.getFieldProps('password')}
              type="password" placeholder="Password"
              // isInvalid={registerForm.errors.password && registerForm.touched.password} 
              />
              <Form.Control.Feedback type="invalid">
              {registerForm.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button  variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </div>
      </div>
    </div>
    );
 }