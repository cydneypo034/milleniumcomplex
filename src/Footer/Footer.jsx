import React, {Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBIcon, MDBFooter, MDBBtn } from "mdbreact";

export default class FooterPage extends Component {
    render() {
        return (
            <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>

                  <MDBCol md="6">
                  <h6 className="footer-text">
                  We’re a fine art and design studio on a mission to share the heart of God ultimately through creating visuals that 
                  spark conversations and aid businesses in sharing their God-given vision. Through a variety of art mediums, 
                  Aesthetically Righteous Studios aims to craft artwork and strategies from a place of intentionality 
                  and authenticity for businesses and beyond.
                  </h6>
                  </MDBCol>

                  <MDBCol md="6">
                  <form className="form-group w-50">
                  <p className="h5 text-center mb-4">Subscribe</p>
                  <div className="grey-text">
                    <MDBInput label="Enter Your Email Here" group type="text" validate error="wrong"
                      success="right" />
                  </div>
                  <div className="text-center">
                    <MDBBtn outline color="brown">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                    </form>
                  </MDBCol>

                  <MDBCol md="6">
                      <ul>
                        <li className="list-unstyled">
                          <a href="#!">Privacy Policy</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">FAQ's</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">Link 3</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">Link 4</a>
                        </li>
                        <span className="social-highlights">
                        <MDBIcon fab icon="facebook" />
                        </span>
                        <span className="social-highlights">
                        <MDBIcon fab icon="instagram" />
                        </span>
                        <span className="social-highlights">
                        <MDBIcon fab icon="pinterest" />
                        </span>
                        
                      </ul>
                  </MDBCol>

              </MDBRow>
              </MDBContainer>


              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: <a href="https://www.aestheticallyrighteousstudios.com"> Aesthetically Righteous Studios </a>
                </MDBContainer>
              </div>
            </MDBFooter>
      );
    }
}