import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import arrow from './img/left-arrow.svg'
import {getApiResource} from "@utils/network";
import {API_RESTAURANTS_DATA} from "@constants/api";
import {useSelector} from "react-redux";
import InfoRestaurant from "@components/RestaurantPage/InfoRestaurant";
import RestaurantMenuCategories from "@components/RestaurantPage/RestaurantMenuCategories";
import RestaurantProductsList from "@components/RestaurantPage/RestaurantProductsList";

const RestaurantPage = () => {
    const {shopName} = useSelector(state => state.restaurantSlice)
    const [costDelivery, setCostDeliver] = useState(0)
    const [range, setRange] = useState([])
    const [category, setCategory] = useState('')
    const navigate = useNavigate()
    const {name, shop} = useParams()

    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            // eslint-disable-next-line array-callback-return
            res.map(item => {
                if (item.name === shopName) {
                    setCostDeliver(item.costDelivery)
                    setRange(item.range)
                }
            })

        }
    }

    useEffect(() => {
        getResource(API_RESTAURANTS_DATA + name)
    }, [])

    return (
        <div className="p-3">
            <p style={{cursor: "pointer"}} onClick={() => navigate(-1)}>
                <img src={arrow} className="me-2" style={{width: 10}} alt="arrow"/>
                Все рестораны
            </p>
            <h1 className="fw-bolder fs-3 mt-4">{shop}</h1>
            <InfoRestaurant costDelivery={costDelivery}/>
            <RestaurantMenuCategories range={range} setCategory={setCategory}/>
            <RestaurantProductsList range={range} category={category}/>
        </div>
    );
};

export default RestaurantPage;