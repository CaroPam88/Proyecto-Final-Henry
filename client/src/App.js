import { Route, useLocation, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import Landing from "./Views/Landing/LandingPage";
import NavBar from "./Views/NavBar/NavBar";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route exact path="/form" element={<Form />} />

        <Route exact path="/detail/:id" element={<Detail />} />

        <Route exact path="/home" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
