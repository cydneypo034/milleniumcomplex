import React, { Component } from "react";
import ReactPlayer from 'react-player';
import McParallax from '../Parallax/mcparallax.jsx';
import MCCarousel from "../Carousel/carousel.jsx";
import Background from "../images/bluewaves.jpg";
import SolomonPhoto from "../images/solomonphoto.jpg";

export default class HomePage extends Component {
    render() {
        return (
            <div>      
            <MCCarousel />

            <h1 style={{ color: "white", backgroundColor: "#1a237e", padding: "2rem"}}> Who We Are </h1>

            <div class="jumbotron text-center hoverable p-4">
                <div class="row">

                    <div class="col-md-4 offset-md-1 mx-3 my-3">
                    <div class="view overlay">
                        <img src={SolomonPhoto} class="img-fluid" alt="blog-list" />  
                    </div>
                    </div>


                    <div class="col-md-7 text-md-left ml-3 mt-3">
                    <h4 class="h4 mb-4">VISION STATEMENT</h4>
                    
                    <p class="font-weight-normal">Our vision is to be of service as believers working 
                    together for the common purpose of spreading the gospel of Jesus Christ collectively 
                    through worship and praise, teaching and preaching using His pulpit, 
                    and glorifying Him through artistic media.</p>

                    <h4 class="h4 mb-4">MISSION STATEMENT</h4>

                    <p class="font-weight-normal">The mission of For I Am Global Ministries is to honor the Father by inviting lost souls 
                    into salvation through the blood of our savior Jesus Christ and to encourage the saints through 
                    fellowship. We believe there is one and only one true and living God (I Am) 
                    who is self-existent and His son Jesus Christ, the creator of heaven and Earth, 
                    the redeemer of mankind.</p>
                    </div>

                </div>

                </div>

            <h1 style={{ color: "white", backgroundColor: "#1a237e", padding: "2rem"}}> Our Ministries </h1>
            <McParallax />

                
            <div style={{padding:"2rem", backgroundImage: `url(${Background})`}}>
            <ReactPlayer url='https://www.youtube.com/embed/HYqMoW48tDs' playing='true' loop='true'/>
            </div>

            </div>

        )
    }
};