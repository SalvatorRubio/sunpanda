import React from 'react';
import {useDispatch} from "react-redux";
import {changeStatusShop, setPrice, setName} from '@store/slices/restaurantSlice'
import cn from "classnames";

import styles from './RestaurantsList.module.css'
import UiRestaurantItem from "@UI/UiRestaurantItem";
import {NavLink} from "react-router-dom";


const RestaurantsList = ({restaurants, refRestaurant}) => {
    const dispatch = useDispatch()

    const handleClick = (price, timeStart, timeEnd, name) => {
        dispatch(changeStatusShop({
            timeStart, timeEnd
        }))
        dispatch(setName(name))
        dispatch(setPrice(price))
    }
    return (
        <div className="mt-5 px-3" ref={refRestaurant}>
            <h1 className="fw-bolder pb-3">Рестораны</h1>
            <div className="d-flex flex-wrap">
                {restaurants.map(({name, img, price, timeStart, timeEnd}) => {
                    return <NavLink key={name} to={`shop-${name}`}
                                    onClick={() => handleClick(price, timeStart, timeEnd, name)}
                                    className="text-decoration-none">
                        <div
                            className={cn('d-flex flex-column m-2 rounded-3 bg-white', styles.restaurants__item)}>
                            <img src={img} alt={name} className="rounded-top"
                                 style={{height: 130, objectFit: 'cover'}}/>
                            <div className="mt-3 mb-4">
                                <p className="text-center text-black  m-0">Бесплатная доставка от <span
                                    className="fw-bolder">{price}</span></p>
                                <p className="text-center m-0 text-black">Время работы <span
                                    className="fw-bolder">c {timeStart} до {timeEnd}</span></p>
                            </div>
                        </div>
                    </NavLink>
                })}
                <UiRestaurantItem/>
            </div>
        </div>
    );
};

export default RestaurantsList;