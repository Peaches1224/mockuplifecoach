import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




export default function Login() {

  return (
  
<div style={{  paddingTop:"150px",}}>
  <h1 style={{ paddingLeft:"530px"}}>
  Log In
  </h1>

    <div style={{ paddingTop:"100px", width:"800px", marginLeft:"200px"}}>
          <Form.Floating className="mb-3">
              <Form.Control style={{borderRadius:"100px"}}
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
                  style={{borderRadius:"200px"}}
              />
              <label htmlFor="floatingPasswordCustom">Password </label>
          </Form.Floating>
          <br></br>


    <div className="d-grid gap-2">
      <Button variant="#800020" style={{ background:"#800020", color:"white", borderRadius:"200px", marginTop:"5px"}}    size="lg">
       Login
      </Button>
      <p style={{ display: "flex", justifyContent: "space-evenly", color:"#CC5500" }}>Forgot your password</p>
     
      <Button style={{background:"#CC5500",  marginTopTop:"20px",borderRadius:"200px", marginTop:"20px"}} variant="secondary"  size="lg">
        Continue with Apple
      </Button>
      
      <Button  style={{ backgroundColor:'white', color:"black", marginTop:"20px",borderRadius:"200px"}} variant="secondary" size="lg">
       Continue with Google
      </Button>
      
      <Button style={{background:"black", color:"white", marginTop:"20px",borderRadius:"200px"}} variant="secondary" size="lg">
        Continue with Microsoft
      </Button>
     
      <Button style={{background:"#1877F2", color:"white", marginTop:"20px",borderRadius:"200px"}} variant="secondary" size="lg">
        Continue with Facebook 
      </Button>
     
      <p style={{ display: "flex", justifyContent: "space-evenly", paddingTop:"100px"}}> Dont have an account</p>
      <h5 style={{ display: "flex", justifyContent: "space-evenly", }} >
     
      <Link style={{color: "#CC5500" }} to="/signup"> Sign Up Here </Link>

      </h5>
      </div>
    </div>
  
  

          {/* <Button style={{flexDirection:'row'}} variant="primary">Log In</Button>{' '}
          <button style={{flexDirection:'row'}}type="button" class="btn btn-secondary">Secondary</button>
          <button style={{flexDirection:'row'}}type="button" class="btn btn-secondary">Continue with Apple</button>
          <button style={{flexDirection:'row'}}type="button" class="btn btn-secondary">Continue with Google</button>
          <button style={{flexDirection:'row'}}type="button" class="btn btn-secondary">Continue with Microsoft</button>
          <button style={{flexDirection:'row'}}type="button" class="btn btn-secondary">Continue with Facebook</button> */}
    </div>
  )
} 
