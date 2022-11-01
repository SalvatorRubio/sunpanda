import React from 'react';
import {Offcanvas} from "react-bootstrap";
import {useSelector} from "react-redux";

import imgCart from './img/cart.jpg'
import arrow from './img/arrow.svg'
import cn from "classnames";

import styles from './OffCanvasCart.module.css'
import ProductsList from "./ProductsList";

const OffCanvasCart = ({show, handleClose}) => {
    const {cartProducts, shopName} = useSelector(state => state.cartSlice)
    return (
        <>
            <Offcanvas className={styles.container} show={show} onHide={handleClose} scroll={true} backdrop={true}
                       placement="end"
                       backdropClassName="bg-transparent" style={{marginTop: 100, width: 300, border: 'none'}}>
                <Offcanvas.Header
                    className={cn("d-flex flex-column align-items-start pb-0 p-2 position-relative", styles.offcanvas__header)}>
                    {cartProducts.length ? <>
                        <p className="m-0 text-secondary">Ваш заказ в ресторане</p>
                        <span>{decodeURI(shopName)}</span>
                    </> : <p className="m-0 text-secondary">Корзина пуста</p>}

                    <div onClick={handleClose}
                         className={cn("position-absolute top-100 bg-white rounded-4", styles.offcanvas__headerBtn)}>
                        <img src={arrow} alt="Закрыть"/>
                    </div>
                </Offcanvas.Header>
                <hr/>
                <Offcanvas.Body className="pt-0">
                    <div className="h-100 w-100">
                        {cartProducts.length ? <ProductsList cartProducts={cartProducts}/> : (
                            <div className="h-100 d-flex align-items-center justify-content-center">
                                <img src={imgCart} style={{width: 200, maxHeight: 200}} alt="Коризна"/>
                            </div>
                        )}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffCanvasCart;