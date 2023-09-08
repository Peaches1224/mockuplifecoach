import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {
  return (
    <div>
          <Form.Floating className="mb-3">
              <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
              <Form.Control
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
          <br></br>
          <Button variant="primary">Log In</Button>{' '}
    </div>
  )
}