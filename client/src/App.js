import { Route, useLocation, Routes } from "react-router-dom";
import {Home} from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import { NavBar }from "./Components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { getAllProducts, getProductsByName, getProductDetail } from "./Redux/ActionsGet";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import LoadingView from "./Views/Landing/LandingPage";
import {WhatsApp} from "./Components/WhatsApp/Whatsapp"
import Footer from "./Components/Footer/Footer";
import Index from "./Views/Admin/Index.jsx";
import DashboardRoute from "./Views/Admin/DashboardRoute";



function App() {

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts(dispatch);
    getProductsByName(dispatch);
    getProductDetail(dispatch);
  }, [dispatch]);
  return (
        <div className="App">
              {pathname !== "/" && pathname.split("/")[1] !== "dashboard" ? (
                <NavBar />
              ) : null}
              {/* {pathname !== "/" && pathname.split("/")[1] !== "dashboard" ? (
                <Footer />
              ) : null} */}
              <Routes>
                <Route path="/" element={<LoadingView />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/form" element={<Form/>} />

                {/* PROTECTED ROUTES FOR ADMIN DASHBOARD */}
                <Route
                  path="/dashboard/*"
                  element={
                    <DashboardRoute>
                      <Index />
                    </DashboardRoute>
                  }
                />
                {/* Redirect to landing if don´t match */}
                <Route path="*" element={<Home />} />
              </Routes>
              {pathname !== "/" && pathname.split("/")[1] !== "dashboard" ? (
                <Footer />
              ) : null}
              {pathname !== "/" && pathname.split("/")[1] !== "dashboard" ? (
                <WhatsApp />
              ) : null}
            </div>
  );
}

export default App;
