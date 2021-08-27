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
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={JesusPhoto}
                    alt="Second slide"
                    />

                    
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={LetGoLetGod}
                    alt="Third slide"
                    />

                   
                </Carousel.Item>
                </Carousel>
        )
    }
};