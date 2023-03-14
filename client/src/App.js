import { Route, useLocation, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import Landing from "./Views/Landing/LandingPage";
import NavBar from "./Views/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      
      <Routes>

        <Route exact path="/" element={<Landing />} />

        <Route exact path="/Form" element={<Form />} />

        <Route exact path="/Detail" element={<Detail />} />

        <Route exact path="/Home" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
