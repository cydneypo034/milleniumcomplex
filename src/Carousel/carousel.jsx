import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
import WorshipLove from '../images/worshiplove.jpg';
import FamilyMinistry from '../images/familyministry.JPG';
import BoyWithBible from '../images/boywithbible.jpg';


export default class McCarousel extends Component {
    render() {
        return (
                <div>
                    <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src={WorshipLove}
                            alt="people-in-worship-service"
                            />
                        <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">The Bread of Life Loves You</h3>
                            <p>He who comes to me shall never hunger, and he who believes in me shall never thirst. John 6:35</p>
                        </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src={FamilyMinistry}
                            alt="Black-family-sitting-in-front-of-church-with-bibles"
                            />
                        <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Family Ministry</h3>
                            <p>From our family to yours - creating a place of love, joy, and peace</p>
                        </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src={BoyWithBible}
                            alt="black-boy-reading-bible-in-bed"
                            />
                        <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Bible Study</h3>
                            <p>Using God's Word to enrich loves and strengthen faith</p>
                        </MDBCarouselCaption>
                        </MDBCarouselItem>

                    </MDBCarouselInner>
                    </MDBCarousel>
                </div>
        )
    }
};