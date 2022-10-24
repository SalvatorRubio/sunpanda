import React from 'react';
import {useSelector} from "react-redux";
import cn from "classnames";
import styles from './InfoRestaurant.module.css'

const InfoRestaurant = ({costDelivery}) => {
    const {status, price} = useSelector(state => state.restaurantSlice)
    return (
        <div className="w-100 d-flex mt-3 d-flex flex-wrap justify-content-md-start justify-content-center">
            <div className={cn("mx-2 rounded-4 bg-white py-2 my-md-0 my-2", styles.item)}>
                <h1 className="text-center m-0 ">Ресторан <span
                    className="text-uppercase fw-bolder text-uppercase">{status ? "Открыт" : "Закрыт"}</span></h1>
            </div>
            <div className={cn("mx-2 rounded-4 bg-white py-2 my-md-0 my-2", styles.item)}>
                <h1 className="text-center m-0 ">Бесплатная доставка от <span
                    className="text-uppercase fw-bolder">{price}</span></h1>
            </div>
            <div className={cn("mx-2 rounded-4 bg-white py-2 my-md-0 my-2", styles.item)}>
                <h1 className="text-center m-0 ">Платная доставка <span
                    className="text-uppercase fw-bolder">{costDelivery}₽</span></h1>
            </div>
        </div>
    );
};

export default InfoRestaurant;