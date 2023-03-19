import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Scenes/Dashboard/Dashboard";
import SideBar from "./Scenes/Global/SideBar";
import TopBar from "./Scenes/Global/TopBar";
import './admin.css'
import Products from "./Scenes/Data/Products";
import ProductCreated from "./Scenes/CreateData/ProductCreated.jsx";
import EditProduct from "./Scenes/EditData/EditProduct";



export default function Index(){
    const [isSidebar, setIsSidebar] = useState(true);


    return(

          <div className="index">
            <SideBar isSidebar={isSidebar} />
            <main className="content">
              <TopBar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/createProduct" element={<ProductCreated />} />
                <Route path="/editProduct/:id" element={<EditProduct />} />
              </Routes>
            </main>
          </div>
    )
}