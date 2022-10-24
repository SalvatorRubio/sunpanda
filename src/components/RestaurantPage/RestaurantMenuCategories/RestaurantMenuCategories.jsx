import React, {useEffect, useState} from 'react';
import cn from "classnames";
import menu from './img/menu.png'
import styles from './RestaurantMenuCategories.module.css'

const RestaurantMenuCategories = ({range, setCategory}) => {
    const [menuListCategory, setMenuListCategory] = useState([{
        name: 'Все меню',
        img: menu,
        status: true
    }])

    const handleClick = (name) => {
        const categories = menuListCategory.map((item) => {
            if(item.name === name) {
                return {...item, status: true}
            }
            return {...item, status: false}
        })
        setCategory(name)
        setMenuListCategory(categories)
    }
    useEffect(() => {
        setMenuListCategory([...menuListCategory])
        const res = range.map(({name, img}) => {
            return {name, img, status: false}
        })

        setMenuListCategory([...menuListCategory, ...res])
    }, [range])

    return (
        <div className="d-flex flex-wrap mt-5 w-100">
            {menuListCategory.map(({name, img, status}) => {
                return <div key={name} onClick={() => handleClick(name)}
                            className={cn("bg-white rounded-4 mx-2 d-flex flex-md-column flex-row align-items-center justify-content-md-center justify-content-evenly my-md-0 my-2",
                                status ? styles.active : '', styles.menu__item)}>
                    <img className="rounded-4" src={img} alt={name}/>
                    <p className="text-center mt-2 w-75" style={{fontSize: 14}}>{name}</p>
                </div>
            })}
        </div>
    );
};

export default RestaurantMenuCategories;