import React, { Component } from "react";
import { MDBView, MDBMask, MDBBtn } from "mdbreact";
import McParallax from '../Parallax/mcparallax.jsx';
import ARSGold from '../images/ARS-goldlayout.jpg';
import CydProfilePic from "../images/cydprofilepic.jpg";
import MCCarousel from "../Carousel/carousel.jsx";

export default class HomePage extends Component {
    render() {
        return (
            <div>
            
            <MCCarousel />

            <McParallax />

           
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