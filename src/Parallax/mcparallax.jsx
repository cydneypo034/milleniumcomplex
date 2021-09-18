import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBCardImage } from "mdbreact";
import FIAMUSIC from '../images/fiagospelorigin.png';
import KCSSquared from '../images/kcssquaredorigin.png';
import Positiv from '../images/positivorigin.png';
import BibleStudy from '../images/biblestudy.png';
import MinistryHands from '../images/ministryhands.png';
import { Parallax } from 'react-parallax';

export default class MCParallex extends Component {
    render() {
        return (
            <div>

            <Parallax blur={10} 
            bgImage={require('../images/blueparallax.jpg')}
            bgImageAlt="blue-playstation-background"
            strength={200}>

            <div style={{ height: '50px' }} />
            <div className="row justify-content-center align-items-center h-100" style={{padding:"2rem"}}>
            <div className="card-wrapper">
                        <MDBCol>
                                <MDBCard style={{ width: "22rem", padding: "2rem" }}>
                                <MDBCardImage className="img-fluid" src={FIAMUSIC} waves />
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
                                <MDBCardImage className="img-fluid" src={KCSSquared} waves />
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
                                <MDBCardImage className="img-fluid" src={Positiv} waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Inspiration</MDBCardTitle>
                                    <MDBCardTitle className="subtitle-text-card">Positiv Newsletter</MDBCardTitle>
                                    <MDBCardText>
                                        A Christian quarterly news and inspiration publication meant to inspire and encourage
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">Read Our Articles</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem", padding: "2rem" }}>
                                <MDBCardImage className="img-fluid" src={BibleStudy} waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Bible Study</MDBCardTitle>
                                    <MDBCardTitle className="subtitle-text-card">Weekly Fellowship</MDBCardTitle>
                                    <MDBCardText>
                                        Join us for Bible Studies live on Zoom for words of encouragement and preaching of the Gospel.
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">Watch Us Preach</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol>
                                <MDBCard style={{ width: "22rem", padding: "2rem" }}>
                                <MDBCardImage className="img-fluid" src={MinistryHands} waves />
                                    <MDBCardBody className="card-info">
                                    <MDBCardTitle>Ministry</MDBCardTitle>
                                    <MDBCardTitle className="subtitle-text-card">Helping Hands</MDBCardTitle>
                                    <MDBCardText>
                                        We serve because He came to serve us first. See which ministry you'd like to be apart of.
                                    </MDBCardText>
                                    <MDBBtn color="#1a237e indigo darken-4" className="white-text" href="#">View Our Ministries</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
            </div>


            <div style={{ height: '50px' }} />
            </Parallax>
            </div>

        )
    }
};