import React, { Component } from "react";
import { MDBView, MDBMask, MDBBtn } from "mdbreact";
import McParallax from '../Parallax/mcparallax.jsx';
import MCCarousel from "../Carousel/carousel.jsx";

export default class HomePage extends Component {
    render() {
        return (
            <div>      
            <MCCarousel />
            <McParallax />

            <div style={{padding:"2rem"}}>
                <h1 >VISION STATEMENT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>

        )
    }
};