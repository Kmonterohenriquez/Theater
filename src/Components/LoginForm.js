import React from "react";
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBInput } from 'mdbreact';

const LoginForm = () => {
  return (
      <div className='LoginForm-container'>
    <MDBContainer>
      <MDBRow >
        <MDBCol >
          <form>
          {/* <MDBIcon fal icon="user" /> */}
            <MDBIcon fas icon="user" className='user-icon center mb-3' />
            <p className="h1 text-center mb-5">Log  In</p>
            <div className="grey-text">
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <button className='btn rounded-btn'>Login</button>
            </div>
            <hr className='mt-5 mb-3' />
            <div className='Login-setup'>
                <p>Not a member? <span><a href='/signup'>Sign Up</a></span></p>
                <p>Forgot <span><a href='/resetPassword'>Password?</a></span></p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default LoginForm;