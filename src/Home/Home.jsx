import React, { Component } from "react";
import { MDBView, MDBMask, MDBBtn } from "mdbreact";
import ARSGold from '../images/ARS-goldlayout.jpg';
import { Parallax } from 'react-parallax';

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <MDBView src={ARSGold}>
            <MDBMask overlay="brown-light" className="flex-center flex-column text-white text-center">
              <h1>Aesthetically Righteous Studios</h1>
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
                Hello World!
            </Parallax>

            </div>
        )
    }
};