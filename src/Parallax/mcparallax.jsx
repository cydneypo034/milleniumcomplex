import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBCardImage } from "mdbreact";

export default class MCParallex extends Component {
    render() {
        return (
            <div className="row justify-content-center align-items-center h-100" style={{padding:"2rem"}}>
            <div className="card-wrapper">
                        <MDBCol>
                                <MDBCard style={{ width: "22rem", padding: "2rem" }}>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Music Production</MDBCardTitle>
                                    <MDBCardTitle className="subtitle-text-card">FIA Gospel Ministries</MDBCardTitle>
                                    <MDBCardText>
                                       Bringing hope and unity through gospel music written and produced by Dr. P
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">Click to Learn More</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem", padding: "2rem" }}>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Film Production</MDBCardTitle>
                                    <MDBCardTitle className="subtitle-text-card">KCS-Squared Film</MDBCardTitle>
                                    <MDBCardText>
                                        We write and produce Christian films that focus on unique stories about faith, deliverance and God's love
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">Watch Our Trailers</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem", padding: "2rem" }}>
                                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Inspiration</MDBCardTitle>
                                    <MDBCardTitle className="subtitle-text-card">Positiv Newsletter</MDBCardTitle>
                                    <MDBCardText>
                                        A Christian quarterly news and inspiration publication with words to inspire and encourage
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">View Our Recent Article</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
            </div>



        )
    }
};