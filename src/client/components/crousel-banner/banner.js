import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import first from '../../assets/3.jpg';
import second from '../../assets/2.jpg';
import third from '../../assets/3.jpeg';
import fourth from '../../assets/1.jpg';
import './banner.scss';

const Banner = () =>{
    return(
        <Carousel showThumbs={false} showArrows={true} className="custom-carousel">
            <div>
                <img src={first} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={second} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={third} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={fourth} />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    );
};

export default Banner;