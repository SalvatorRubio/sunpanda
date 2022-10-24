import React from 'react';
import cn from "classnames";
import styles from './RestaurantProductsList.module.css'

const RestaurantProductsList = ({range}) => {
    return (
        <div>
            {range.map(({name, products}) => {
                return (
                    <div key={name} className="my-5">
                        <h1 className="mb-5">{name}</h1>
                        <div className="d-flex flex-wrap">
                            {products.map(({name, price, composition, img}) => {
                                return <div key={name}
                                            className={cn("bg-white rounded-4 me-3 p-2 d-flex flex-column justify-content-between align-content-between", styles.product__item)}>
                                    <img className="rounded-4 fw-bolder" src={img} alt={name}/>
                                    <p className="m-0">{name}</p>
                                    <button className={cn("m-2 p-1 rounded border-0 text-white", styles.product__button)}>В корзину {price}₽</button>
                                </div>
                            })}
                        </div>
                    </div>
                )

            })}
        </div>
    );
};

export default RestaurantProductsList;