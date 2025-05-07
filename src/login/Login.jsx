import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

export default function Login() {
   return (
    <Container className="container">
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <h1>Login page</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  isInvalid={true}
                />
                <Form.Control.Feedback type="invalid">
                  Error
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

