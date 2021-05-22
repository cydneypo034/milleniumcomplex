import React, { Component } from "react";
import { MDBView, MDBMask, MDBBtn, MDBCard, MDBCardBody, MDBFooter, MDBCardImage, 
    MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBContainer } from "mdbreact";
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
              <h4>"Art Beautifully Defined by God"</h4>
              <p>Brand Strategy and Design | Prophetic Fine Art | Graphic Retainers</p><br />
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


            <div class="jumbotron text-center p-4">
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
                    God gave me the vision for ARS years ago as I was discovering my purpose as a creative. The purpose of ARS is to
                    share the heart of God to His people and start an intimate conversation between heaven and earth. <br/>

                    A few fun facts about me: I was born and raised in Atlanta, Georgia. I attended the University of West Georgia and graduated
                    with my Bachelor of Arts Degree with a Focus in Studio Art and a Minor in Marketing + Advertising. I'm now operating out of Duluth, Georgia.
                    When I'm not working or doing art, you can find me watching anime, eating vegan food, 
                    or hanging out with my family and my Golden Doodle, Beaux. I'm a nature lover and a big Disney fan. 
                    I am always looking for inspiration for new artwork and look forward to learning new art mediums. 
                    If you have any questions, please feel free to shoot me an email in Contact tab.
                    </p>
                    </div>

                </div>
                </div>
                </div>

        )
    }
};