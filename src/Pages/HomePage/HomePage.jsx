import React, {useEffect} from 'react';
import Banner from "@components/HomePage/Banner";
import CitiesList from "@components/HomePage/CitiesList";
import {persistor} from "@store/store";
import {useDispatch} from "react-redux";
import {clearCartState} from "@store/slices/cartSlice";
import {clearRestaurantState} from "@store/slices/restaurantSlice";

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        persistor.purge()
        dispatch(clearCartState())
        dispatch(clearRestaurantState())
    }, [])
    return (
        <>
            <Banner/>
            <CitiesList/>
        </>
    );
};

export default HomePage;