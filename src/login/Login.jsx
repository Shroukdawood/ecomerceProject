import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useAuthContext } from "../context/AuthContext";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const {login , isAuth} = useAuthContext();
    const navigate = useNavigate();
    //   isAuth && navigate("/")
    // ;
    if (isAuth) {
      navigate("/");
    }
    const loginForm = useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        validationSchema:object({
            username:string().required(),
            password:string().required(),
        }),
        validateOnMount:true,
        onSubmit:(values)=>{
           login(values);
            
        },
       
    });
   
   return (
    <Container className="container" style={{textAlign:'start'}}>
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <h1>Login page</h1>
          <Form onSubmit={loginForm.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >User Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                {...loginForm.getFieldProps('username')}
                  
                  placeholder="Enter User Name"
                  isInvalid={loginForm.errors.username }
                />
                <Form.Control.Feedback type="invalid">
                  {loginForm.errors.username && loginForm.touched.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              {...loginForm.getFieldProps('password')}
              type="password" placeholder="Password"
              isInvalid={loginForm.errors.password && loginForm.touched.password} />
              <Form.Control.Feedback type="invalid">
              {loginForm.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button  variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

