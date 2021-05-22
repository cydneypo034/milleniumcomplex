import React, {Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";

export default class FooterPage extends Component {
    render() {
        return (
            <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                  <MDBCol md="6">
                    <h5 className="title">Contact Me</h5>
                    <MDBBtn>Schedule Your Consultation</MDBBtn>
                    <p>hello@aestheticallyrighteousstudios.com | 678-667-4450</p>
                  </MDBCol>
                  
                </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
              </div>
            </MDBFooter>
      );
    }
}