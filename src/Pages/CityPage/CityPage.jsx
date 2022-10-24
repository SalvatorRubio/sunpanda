import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";

import Steps from "@components/CityPage/Steps/Steps";
import RestaurantDiscounts from "@components/CityPage/RestaurantDiscounts";
import RestaurantsList from "@components/CityPage/RestarauntsList";

import {getApiResource} from "@utils/network";
import {API_CITY_RESTAURANTS} from "@constants/api";


import banner from './img/banner.jpg'
import bannerPhone from './img/banner-phone.jpg'
import cn from "classnames";
import styles from './CityPage.module.css'


const CityPage = () => {
    const [img, setImg] = useState()
    const [discounts, setDiscounts] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const refRestaurant = useRef(null)

    const {name} = useParams()

    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            setDiscounts(res.discounts)
            setRestaurants(res.restaurants)
            return true
        }
    }

    useEffect(() => {
        getResource(API_CITY_RESTAURANTS + name)
    }, [name])

    useEffect(() => {
        const width = window.screen.availWidth
        if (width >= '801') {
            setImg(banner)
        } else {
            setImg(bannerPhone)
        }
    }, [])

    const buttonHandler = () => {
        refRestaurant.current.scrollIntoView();
    }

    return (
        <>
            <div className={cn(styles.banner)} style={{scrollBehavior: 'smooth'}}>
                <img className="position-absolute  d-block" src={img} alt="Банер"/>
                <div
                    className={cn("w-50 h-100 py-5 m-auto position-relative d-flex flex-column justify-content-center align-items-lg-start align-items-center")}>
                    <h1 className={cn("fw-bolder lh-1 pb-lg-5 text-md-start text-center w-lg-75", styles.banner__text)}>Доставка
                        готовых блюд из ресторанов</h1>
                    <button onClick={buttonHandler} className={cn('border-0 rounded-1 py-2', styles.button)}>Заказать доставку</button>
                </div>
            </div>
            <RestaurantDiscounts discounts={discounts}/>
            <Steps/>
            <RestaurantsList restaurants={restaurants} refRestaurant={refRestaurant}/>
        </>
    );
};

export default CityPage;