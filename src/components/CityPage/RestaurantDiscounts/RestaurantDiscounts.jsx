import React from 'react';
import Slider from 'react-slick'

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
};

const RestaurantDiscounts = ({discounts}) => {


    return (
        <div className="w-75 m-auto">
            <Slider {...settings}>
                {discounts.map(item => {
                    return <div key={item} className="rounded-3">
                        <img src={item} className="w-100 rounded-1 px-3" alt={item}/>
                    </div>
                })}

            </Slider>
        </div>
    );
};

export default RestaurantDiscounts;