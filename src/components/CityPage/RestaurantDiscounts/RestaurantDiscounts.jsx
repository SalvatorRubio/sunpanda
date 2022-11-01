import React from 'react';
import Slider from 'react-slick'

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const RestaurantDiscounts = ({discounts}) => {
    return (
        <div className="w-75 m-auto my-5">
            <Slider {...settings}>
                {discounts.map(item => {
                    return <div key={item} className="px-3">
                        <img src={item} className="w-100 rounded-3" alt={item}/>
                    </div>
                })}

            </Slider>
        </div>
    );
};

export default RestaurantDiscounts;