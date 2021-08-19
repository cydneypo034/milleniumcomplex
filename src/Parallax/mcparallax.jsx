import React, {Component} from 'react';
import { MDBView, MDBMask, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, 
    MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";
    import FineArt from '../images/fineart.png';
    import BrandDesign from '../images/branddesign.png';
    import LearnMore from '../images/learnmore.png';


export default class MCParallex extends Component {
    render() {
        return (
            <div className="row justify-content-center align-items-center h-100">
            <div className="card-wrapper">
                        <MDBCol>
                                <MDBCard style={{ width: "22rem" }}>
                                    <MDBCardImage className="img-fluid" 
                                    src={FineArt} waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>The ArtfulCreations Shop</MDBCardTitle>
                                    <MDBCardText>
                                        Visit our fine art shop to shop for one-of-a-kind, 
                                        Holy Spirit inspired artwork created in house by owner and prophetic fine artist Cydney Pollard.
                                    </MDBCardText>
                                    <MDBBtn color="brown" href="#">Shop ArtfulCreations</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem" }}>
                                    <MDBCardImage className="img-fluid" 
                                    src={BrandDesign} waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Brand Design and Strategy</MDBCardTitle>
                                    <MDBCardText>
                                        *Coming Soon* Feel free to schedule a brand audit or design clarity call with us for 
                                        your branding needs in both strategy and design.
                                    </MDBCardText>
                                    <MDBBtn color="brown" href="#">View Our Calendar</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem" }}>
                                    <MDBCardImage className="img-fluid" 
                                    src={LearnMore} waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Prophetic Art Education</MDBCardTitle>
                                    <MDBCardText>
                                        *Coming Soon* Check out our blog to read on the prophetic arts, what it all entails, and exercises
                                        to help in your prophetic exploration.
                                    </MDBCardText>
                                    <MDBBtn color="brown" href="#">See Our Blog</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
            </div>



        )
    }
};