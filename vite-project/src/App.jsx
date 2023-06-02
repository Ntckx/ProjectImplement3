import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import TripContent from "./pages/TripContent.jsx";
import Setting from "./pages/Setting.jsx"
function App() {
  return (
    <div className="container">
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Cards" element={<Home />} />
          <Route exact path= "/TripContent/:TripID"  element={<TripContent />}/>
          <Route exact path="/Setting" element={<Setting />} />
          <Route exact path = "/Cards/:id" element = {<TripContent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
