import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container">
            <Slider {...settings}>
                <div>
                    <h4>- KAREN SMITH</h4>
                    <p>Highly recommended Flair for natural and subtle results!</p>
                </div>
                <div>
                    <h4>- JESS DOE</h4>
                    <p>Flair helped meboost confidence in myself for the first time in a long time!</p>                </div>
                <div>
                    <h4>- HAILEY GOODEN</h4>
                    <p>The practitioner at Flair did an amazing job. I can't thank her enough!!</p>
                </div>
                <div>
                    <h4>- JANICE THOMPSON</h4>
                    <p>Can't recommend Flair's dermal products fillers enough!</p>                </div>
            </Slider>
        </div>
    );
}

export default SlickSlider