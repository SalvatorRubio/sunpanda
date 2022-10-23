import Header from "@components/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage";
import CityPage from "../CityPage";

import styles from './App.module.css'

function App() {
    return (
        <>
            <Header/>
            <main className={styles.container}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/City-:name" element={<CityPage/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
