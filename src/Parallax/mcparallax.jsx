import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";

export default class MCParallex extends Component {
    render() {
        return (
            <div className="row justify-content-center align-items-center h-100">
            <div className="card-wrapper">
                        <MDBCol>
                                <MDBCard style={{ width: "22rem" }}>
                                    
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>New Here?</MDBCardTitle>
                                    <MDBCardText>
                                       Millenium Complex is a ministry dedicated to providing services for you and your family.
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">Meet Us</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem" }}>
                                    
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>View Our Ministries</MDBCardTitle>
                                    <MDBCardText>
                                        Feel free to view our ministries in film and music production, books and classes.
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">Join Us</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem" }}>
                                    
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Partner With Us</MDBCardTitle>
                                    <MDBCardText>
                                        You can partner with us by donating via Paypal and Cashapp.
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">Give Today</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
            </div>



        )
    }
};