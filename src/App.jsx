import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer";
import Services from "./Pages/Services/Services";
import AllProjects from "./Pages/Projects/AllProjects";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AllProjectsDetails from "./Pages/Projects/AllProjectsDetails";
import CartPg from "./Pages/Cart/CartPg";
import Error404Pg from "./Pages/Error404Pg/Error404Pg";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/details/:id" element={<ServicesDetails />} />
        <Route path="/projects/details/:id" element={<AllProjectsDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<CartPg />} />
        <Route path="/*" element={<Error404Pg />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
