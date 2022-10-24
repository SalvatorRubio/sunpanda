import React, {useEffect, useState} from 'react';
import cn from "classnames";
import menu from './img/menu.png'
import styles from './RestaurantMenuCategories.module.css'

const RestaurantMenuCategories = ({range}) => {
    const [menuList, setMenuList] = useState([])

    const handleClick = (name) => {
        const menu = menuList.map((item) => {
            if(item.name === name) {

                return {...item, status: true}
            }
            return {...item, status: false}
        })
        setMenuList(menu)
    }
    console.log(menuList)

    useEffect(() => {
        setMenuList([])
        const res = range.map(({name, img}) => {
            return {name, img, status: false}
        })
        setMenuList([{
            name: 'Все меню',
            img: menu,
            status: true
        }, ...res])
    }, [range])

    return (
        <div className="d-flex flex-wrap mt-5 w-100">
            {menuList.map(({name, img, status}) => {
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