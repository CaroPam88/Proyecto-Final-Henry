import { Route, useLocation, Routes } from "react-router-dom";
import {Home} from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import Landing from "./Views/Landing/LandingPage";
import { NavBar }from "./Components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { Background } from "../src/Components/Background/Background.jsx"
import { getAllProducts, getProductsByName, getProductDetail } from "./Redux/ActionsGet";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import LoadingView from "./Views/Landing/LandingPage";
import {WhatsApp} from "./Components/WhatsApp/Whatsapp.jsx";



function App() {
  const {pathname} = useLocation();

  return (
    <div>
      { pathname !== "/" && pathname.split("/") ? (<NavBar />)  : null}
      {pathname !== "/" && pathname.split("/") ? (<WhatsApp />) : null}

      <Routes>

        <Route exact path="/" element={<LoadingView/>} />

        <Route exact path="/Form" element={<Form />} />

        <Route exact path="/Detail" element={<Detail />} />

        <Route exact path="/home" element={<Home/>}  />

      </Routes>
    </div>
  );
}

export default App;
