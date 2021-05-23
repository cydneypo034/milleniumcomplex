import React, {Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBIcon, MDBFooter, MDBBtn } from "mdbreact";
import SecondLogo from "../images/ARS-secondlogo.png";

export default class FooterPage extends Component {
    render() {
        return (
            <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>

                  <MDBCol md="6">
                  <p className="h5 text-left mb-4">Our Mission</p>
                  <h6 className="footer-text">
                  We’re a fine art and design studio on a mission to share the heart of God ultimately through creating visuals that 
                  spark conversations and aid businesses in sharing their God-given vision. Through a variety of art mediums, 
                  Aesthetically Righteous Studios aims to craft artwork and strategies from a place of intentionality 
                  and authenticity for businesses and beyond.
                  </h6>
                  <div className="social-icons">
                    <MDBIcon fab icon="facebook" size="3x" /> &nbsp;
                    <MDBIcon fab icon="instagram" size="3x" /> &nbsp;
                    <MDBIcon fab icon="pinterest" size="3x" /> &nbsp;
                  </div>
                  </MDBCol>

                  <MDBCol md="6">
                  <form className="form-group w-50">
                  <p className="h5 text-left mb-4">Stay Connected</p>
                  <h6 className="footer-text">Sign up to stay updated with all updates released!</h6>
                  <div className="grey-text">
                    <MDBInput label="Enter Your Email Here" group type="text" validate error="wrong"
                      success="right" />
                  </div>
                  <div className="button-styled">
                    <MDBBtn color="brown">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                    </div>
                      </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>


              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  <a href="#!">Privacy Policy</a> &nbsp;
                  <a href="#!">FAQ's</a> &nbsp;
                  <a href="#!">Our Vision</a> &nbsp;
                  <a href="#!">Contact Us</a> &nbsp;

                  &copy; {new Date().getFullYear()} Copyright: 
                  <a href="https://www.aestheticallyrighteousstudios.com"> Aesthetically Righteous Studios </a>
                </MDBContainer>
              </div>
            </MDBFooter>
      );
    }
}