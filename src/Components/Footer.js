import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <MDBFooter className="Footer-color font-small pt-4">
        <div className='Footer-container'>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Lastest Movie</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Search</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sign Up</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://kevinmontero.netlify.com/"> Kevin Montero</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;