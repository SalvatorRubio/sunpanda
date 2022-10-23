import React from 'react';


import styles from './HomePage.module.css'
import Banner from "@components/HomePage/Banner";
import CitiesList from "@components/HomePage/CitiesList";

const HomePage = () => {
    return (
        <>
            <Banner/>
            <CitiesList />
        </>
    );
};

export default HomePage;