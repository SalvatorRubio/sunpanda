import React, {useEffect, useState} from 'react';
import cn from "classnames";
import styles from './RestaurantProductsList.module.css'
import {useDispatch} from "react-redux";
import {addProduct} from "@store/slices/cartSlice";
import ModalAddProduct from "../../UI/ModalAddProduct";

const RestaurantProductsList = ({range, category}) => {
    const [menuList, setMenuList] = useState([])
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const handleClick = (name, price, img) => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        },10000)
        const product = {
            name,
            price,
            img,
            oneProductPrice: price,
            length: 1
        }
        dispatch(addProduct(product))
    }

    useEffect(() => {
        if(range.find(item => item.name === category)) {
            // eslint-disable-next-line array-callback-return
            range.map(({name, products}) => {
                if(name === category) {
                    return setMenuList([{name, products}])
                }
            })
        } else {
            setMenuList(range)
        }
    },[range, category])
    return (
        <>
            {menuList.map(({name, products}) => {
                return (
                    <div key={name} className="my-5">
                        <h1 className="mb-5">{name}</h1>
                        <div className="d-flex flex-wrap">
                            {products.map(({name, price, composition, img}) => {
                                return <div key={name}
                                            onClick={() => handleClick(name, price, img)}
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
            <ModalAddProduct show={show}/>
        </>
    );
};

export default RestaurantProductsList;