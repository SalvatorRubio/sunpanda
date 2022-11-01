import {useState} from "react";
import Header from "@components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage";
import CityPage from "../CityPage";
import RestaurantPage from "../RestaurantPage";

import styles from './App.module.css'
import OffCanvasCart from "../../components/UI/OffCanvasCart";


function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow(show => !show);
    return (
        <>
            <Header toggleShow={toggleShow}/>
            <main className={styles.container}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/City-:name/" element={<CityPage/>} />
                    <Route path="/City-:name/shop-:shop" element={<RestaurantPage />}/>
                </Routes>
            </main>
            <OffCanvasCart show={show} handleClose={handleClose}/>
        </>
    );
}

export default App;
