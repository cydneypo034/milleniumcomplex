import React, {Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBIcon, MDBFooter, MDBBtn } from "mdbreact";

export default class FooterPage extends Component {
    render() {
        return (
            <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>

              <MDBCol md="6">
                  <h6>
                  We’re a fine art and design studio on a mission to create effective visuals and 
                  plans for brands longing to tell their story. We’re actively listening to the heart of the One 
                  who adores us for what His heart says about us in paintings and a variety of other mediums. 
                  Whether you’re a brand beginning to tell their story or are wanting artwork that has the capacity to 
                  touch a deep place, Aesthetically Righteous Studios 
                  aims to offer strategies and craft artwork from a place of intentionality and authenticity for your business and beyond.
                  </h6>
                  </MDBCol>
                  
                  <MDBCol md="6">

                  <form className="form-group w-50">
                  <p className="h5 text-left mb-4">Subscribe</p>
                  <div className="grey-text">
                    <MDBInput label="Enter Your Email Here" group type="text" validate error="wrong"
                      success="right" />
                  </div>

                  <div className="text-left">
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