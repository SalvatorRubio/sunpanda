import React from 'react';

import styles from './UiRestaurantItem.module.css';
import cn from "classnames";

const UiRestaurantItem = () => {
    return (
        <div className={cn('rounded m-2 p-2 d-flex align-items-center justify-content-center',styles.item)}>
            <p className="text-center text-uppercase">скоро!!! новый ресторан</p>
        </div>
    );
};

export default UiRestaurantItem;