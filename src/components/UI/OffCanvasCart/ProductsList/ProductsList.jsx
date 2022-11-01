import React from 'react';
import cn from "classnames";

import trashIcon from './img/trash.svg'

import styles from './ProductsList.module.css'
import {useDispatch} from "react-redux";
import {removeProduct, incrementProduct, decrementProduct} from "@store/slices/cartSlice";

const ProductsList = ({cartProducts}) => {
    const dispatch = useDispatch()

    return (
        <div className={cn("d-flex flex-column align-items-center w-100", styles.container)}>
            {cartProducts.map(({name,price,img,length}, idx) => {
                return <div key={idx} className="d-flex w-100 my-2">
                    <img src={img} alt={name} style={{width: 43, height: 31}}/>
                    <div className="d-flex flex-column w-100">
                        <div className="d-flex justify-content-between mb-1">
                            <span >{name}</span>
                            <span style={{width: 50}} className="text-end">{price} ₽</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-1">
                            <div className="d-flex align-items-center">
                                <div className={cn("d-flex align-items-center justify-content-center",styles.btns)}
                                     onClick={() => dispatch(decrementProduct(idx))}
                                >
                                    -
                                </div>
                                <span className="mx-2">{length}</span>
                                <div onClick={() => dispatch(incrementProduct(idx))}
                                    className={cn("d-flex align-items-center justify-content-center",styles.btns)}
                                >
                                    +
                                </div>
                            </div>
                            <img onClick={() => dispatch(removeProduct(idx))} src={trashIcon} alt="Удалить" style={{width: 18, cursor: "pointer"}}/>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default ProductsList;