import Header from "@components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage";
import CityPage from "../CityPage";
import RestaurantPage from "../RestaurantPage";

import styles from './App.module.css'


function App() {
    return (
        <>
            <Header/>
            <main className={styles.container}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/City-:name/" element={<CityPage/>} />
                    <Route path="/City-:name/shop-:shop" element={<RestaurantPage />}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
