import React, { Component } from "react";
import { MDBView, MDBMask } from "mdbreact";
import BlueFlowers from '../images/BlueFlowers.JPG';

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <MDBView src={BlueFlowers}>
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>Aesthetically Righteous Studios</h2>
              <h5>Fine Art </h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
          </MDBView>
            </div>
        )
    }
};