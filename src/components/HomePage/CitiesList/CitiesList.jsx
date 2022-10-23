import React from 'react';
import cn from "classnames";

import styles from './CitiesList.module.css'
import {NavLink} from "react-router-dom";

const CitiesList = () => {
    const cities = [
        {
            name: 'Ахтубинск',
            href: 'Ahtubinsk'
        },
        {
            name: 'Новошахтинск',
            href: 'Novoshahtinsk'
        },
        {
            name: 'Крымск',
            href: 'Krymsk'
        },
        {
            name: 'Каменск-Шахтинский',
            href: 'KamenskShahtinsk'
        },
        {
            name: 'Сарапул',
            href: 'Sarapul'
        }]
    return (
        <div className='w-50 mx-auto pt-5'>
            <h2 className={cn("text-uppercase text-center fw-bolder", styles.title)}>Мы <span>работаем</span> в городах
            </h2>
            <div className="d-flex flex-wrap justify-content-center">
                {cities.map(({name, href}) => {
                    return (
                        <NavLink className={cn('m-5 text-decoration-none text-white pointer-event p-2 rounded-1', styles.city__name)}
                                 key={name} to={`/City-${href}/`}>{name}</NavLink>
                    )
                })}
            </div>
        </div>
    );
};

export default CitiesList;