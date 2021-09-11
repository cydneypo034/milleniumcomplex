import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BibleImage from '../images/bibleimage.jpg';
import JesusPhoto from '../images/jesusphoto.jpg';
import LetGoLetGod from '../images/boywithbible.jpg';

export default class McCarousel extends Component {
    render() {
        return (
                <Carousel fade>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={BibleImage}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="h3-responsive">He Loves You</h2>
                    <h3>The Bread of Life</h3>
                    <p>He who comes to Me shall never hunger, and He who believes in me shall never thirst. John 6:35</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={JesusPhoto}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2 className="h3-responsive">Family Ministry</h2>
                    <p>From our family to yours - creating a place of love, joy, and peace</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={LetGoLetGod}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2 className="h3-responsive">Bible Study</h2>
                    <p>HUsing God's Word to enrich lives and strengthen faith</p>
                    </Carousel.Caption>
                   
                </Carousel.Item>
                </Carousel>
        )
    }
};