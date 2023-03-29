import { Route, useLocation, Routes } from "react-router-dom";
import {Home} from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import { NavBar }from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import LoadingView from "./Views/Landing/LandingPage";
import {WhatsApp} from "./Components/WhatsApp/Whatsapp"
import Footer from "./Components/Footer/Footer";
import Index from "./Views/Admin/Index.jsx";
import DashboardRoute from "./Views/Admin/DashboardRoute";
import Cart from "./Views/Cart/Cart";
import Nosotros from "./Components/Nosotros/Nosotros";

import UserProfile from './Authentication/ProfileScreen/UserProfile'




function App() {

  const { pathname } = useLocation();

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
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/detail/:id" element={<Detail />} />
                <Route exact path="/form" element={<Form/>} />
                <Route exact path ="/user/profile" element={<UserProfile/>} />
                <Route exact path="/cart" element={<Cart/>} />
                <Route exact path = "/nosotros" element={<Nosotros />} />

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
