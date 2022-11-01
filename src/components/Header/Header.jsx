import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import cn from "classnames";
import logo from './img/SunPanda.jpg'
import basket from './img/icon-shopping.svg'
import styles from './Header.module.css'
import {setTotalCost} from "@store/slices/cartSlice";

const Header = ({toggleShow}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cityName, totalCost, cartProducts} = useSelector(state => state.cartSlice)

    const handleClick = () => {
        navigate('/')
    }

    useEffect(() => {
        dispatch(setTotalCost())
    },[cartProducts])

    return (
        <>
            <header
                className={cn('px-sm-2 px-0 position-fixed bg-white w-100 d-flex flex-wrap flex-md-nowrap justify-content-sm-between justify-content-center', styles.header)}>
                <img src={logo} alt="SunPanda" onClick={handleClick}/>
                {cityName.length > 0 && <div
                    className='d-flex align-items-center justify-content-md-between justify-content-evenly p-lg-4 p-1 w-lg-75 w-md-50 w-sm-25 w-100'>
                    <button className={cn('border-0 text-uppercase rounded-1 fw-bolder', styles.header__btn)}
                            onClick={handleClick}>На главную
                    </button>
                    <h1 className={cn('m-0', styles.header__city)}>{cityName}</h1>
                    <button
                        onClick={toggleShow}
                        className={cn('border-0 text-uppercase rounded-1 d-flex align-items-center justify-content-center', styles.header__btnBasket)}>
                        <img className={cn("me-2", styles.button__icon)} src={basket} alt="Корзина"/>
                        {totalCost} ₽
                    </button>

                </div>}
            </header>
        </>);
};

export default Header;