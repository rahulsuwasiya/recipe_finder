import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import MealDetail from "./pages/MealDetail"; 
import SpecificCategory from "./pages/SpecificCategory";
import Explore from "./pages/Explore";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/meal/:id" element={<MealDetail />} /> 
        <Route path="/category/:name" element={<SpecificCategory />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </div>
  );
}

export default App;
