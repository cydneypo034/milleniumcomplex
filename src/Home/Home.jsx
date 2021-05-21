import React, { Component } from "react";
import { MDBView, MDBMask, MDBBtn } from "mdbreact";
import ARSGold from '../images/ARS-goldlayout.jpg';

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <MDBView src={ARSGold}>
            <MDBMask overlay="brown-light" className="flex-center flex-column text-white text-center">
              <h2>Aesthetically Righteous Studios</h2>
              <h5>"Art Beautifully Defined by God"</h5>
              <p>Brand Strategy | Brand Design | Fine Art</p><br />
              <MDBBtn color="brown">See Our Fine Art Shop</MDBBtn>
            </MDBMask>
          </MDBView>
            </div>
        )
    }
};