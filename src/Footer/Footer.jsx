import React, {Component} from "react";
import {  MDBContainer,  MDBInput, MDBFooter, MDBBtn } from "mdbreact";
import ForIAmLogo2 from '../images/secondforiamlogo2.png';

export default class FooterPage extends Component {
    render() {
        return (
          <div>
            <MDBFooter color="#1a237e indigo darken-4" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-center">
              
                <div className="form">
                  <p className="h4 text-center">Stay Connected</p>
                  <div class="input-group">
                  <MDBInput type="text" className="form-control" name="name" label="Enter Your Name" color="white"></MDBInput> &nbsp;
                  <MDBInput type="text" className="form-control" name="email" label="Enter Your Email" color="white"></MDBInput>
                  <span class="input-group-btn">
                    <MDBBtn class="btn" type="button" color="white">Send</MDBBtn>
                  </span>
                </div>
                </div>
                  
                  
        

                <a href="#!"><img src={ForIAmLogo2} style={{ width: "10rem", height: "10rem" }}/></a>
                </MDBContainer>


              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  <a href="#!">Privacy Policy</a> &nbsp;
                  <a href="#!">FAQ's</a> &nbsp;
                  <a href="#!">Our Vision</a> &nbsp;
                  <a href="#!">Contact Us</a> &nbsp;

                  &copy; {new Date().getFullYear()} Copyright: 
                  <a href="https://www.milleniumcomplex.com"> FOR I AM Gospel Ministries </a>
                </MDBContainer>
              </div>
            </MDBFooter>
            </div>
            
      );
    }
}