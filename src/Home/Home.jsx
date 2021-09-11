import React, { Component } from "react";
import McParallax from '../Parallax/mcparallax.jsx';
import MCCarousel from "../Carousel/carousel.jsx";
import Background from "../images/bluewaves.jpg";

export default class HomePage extends Component {
    render() {
        return (
            <div>      
            <MCCarousel />
            <McParallax />

            <div style={{padding:"2rem", textAlign:"center"}}>
                <h1 >VISION STATEMENT</h1>
                <p>Our vision is to be of service as believers working together for the
                    common purpose of spreading the word collectively as a body of Christ
                    through worship and praise, teaching and preaching using His pulpit,
                    and glorifying Him through artistic media.</p>
            </div>
            
            <div style={{padding:"2rem", backgroundImage: `url(${Background})`}}>
            <center><iframe width="560" height="315" src="https://www.youtube.com/embed/HYqMoW48tDs" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
                </center>
            </div>

            <div style={{padding:"2rem", textAlign:"center"}}>
                <h1 >MISSION STATEMENT</h1>
                <p>The mission of FIA Gospel Ministries is to honor the Father by inviting lost 
                  souls into salvation through the blood of our savior Jesus Christ to enrich lives
                  and encourage saints through fellowship. We believe there is one and only one true
                  and living God who is self existent and the eternal I AM, the creator of heaven and 
                  Earth, the redeemer of mankind.</p>
            </div>
            
            </div>

        )
    }
};