import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../pages/home";
import NavBarComponents from "../components/NavBarComponents/NavBarComponents";
import Category from "../pages/Category"
import Item from "../pages/Item";

const MainRoutes = () => {
    return(
        <BrowserRouter>
            <NavBarComponents />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/category/:categoryId" element={<Category />}/>
                    <Route path="/item/:id" element={<Item />} />
                </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes