import React from 'react';
import img from './img/SunPanda.jpg'
import {useNavigate} from "react-router-dom";
import cn from "classnames";
import styles from './Header.module.css'

const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <header className={cn(styles.header, 'px-2', 'position-fixed', 'bg-white', 'w-100')}>
                <img src={img} alt="SunPanda" onClick={() => navigate('/')}/>
            </header>
        </>);
};

export default Header;