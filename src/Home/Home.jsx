import React, { Component } from "react";
import { MDBView, MDBMask, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";
import ARSGold from '../images/ARS-goldlayout.jpg';
import FineArt from '../images/fineart.png';
import BrandDesign from '../images/branddesign.png';
import LearnMore from '../images/learnmore.png';
import CydProfilePic from "../images/cydprofilepic.jpg";
import { Parallax } from 'react-parallax';

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <MDBView src={ARSGold}>
            <MDBMask overlay="brown-light" className="flex-center flex-column text-white text-center">
              <h1>AESThETICAlly RIGhtEOUs STUDIOS</h1>
              <h5>"Art Beautifully Defined by God"</h5>
              <p>Brand Strategy | Brand Design | Fine Art</p><br />
              <div className="container">
              <MDBBtn color="brown">Fine Art Shop</MDBBtn>
              <MDBBtn color="brown">Branding Services</MDBBtn>
              </div>
            </MDBMask>
          </MDBView>

            <Parallax blur={10} 
            bgImage={require('../images/goldrush.jpg')}
            bgImageAlt="gold-foil-paper"
            strength={200}>

            <div style={{ height: '50px' }} />

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

            <div style={{ height: '50px' }} />
            </Parallax>

                <div class="jumbotron text-center hoverable p-4">
                <div class="row">

                    <div class="col-md-4 offset-md-1 mx-3 my-3">
                    
                    <div class="view overlay">
                        <img src={CydProfilePic} class="img-fluid" alt="blog-list" />
                        <div class="mask rgba-white-slight">
                        </div>
                    </div>
                    </div>

                    <div class="col-md-7 text-md-left ml-3 mt-3">
                   
                    <h4 class="h4 mb-4">Here's a Word from our Founder</h4>
                    <p class="font-weight-normal">My name is Cydney Pollard, founder of Aesthetically Righteous Studios. 
                    I have a passion for creating and have used my creative capabilities for service in different ways.
                    My love for drawing began to form when I was in elementary school and since then, I wanted to find my place
                    in the world as a creative person. I've worked as a freelance graphic designer and a visual fine artist
                    in digital illustration and painting for 7+ years. 
                    </p>
                    </div>

                </div>

                </div>
                </div>

        )
    }
};