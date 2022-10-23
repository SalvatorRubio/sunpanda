import React from 'react';

import leftImg from "./img/l-element.png";
import iconLogo from "./img/logo.png";
import rightImg from "./img/r-element.png";

import cn from "classnames";

import styles from "./Baner.module.css";

const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <section className={cn(styles.banner, 'd-flex align-items-start')}>
                <img src={leftImg} className={cn('img-fluid', styles.img)} alt=""/>
                <div className={cn('d-flex flex-column align-items-center', styles.item)}>
                    <img src={iconLogo} className={styles.logo} alt=""/>
                    <p className="fw-bolder text-white text-center lh-2 text-uppercase">
                        Агрегатор доставки <br/>
                        из ресторанов <br/>
                        вашего города
                    </p>
                </div>
                <img src={rightImg} className={cn('img-fluid', styles.img)} alt=""/>
            </section>
        </div>
    );
};

export default Banner;