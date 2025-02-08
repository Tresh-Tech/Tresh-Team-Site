import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer";
import Services from "./Pages/Services/Services";
import AllProjects from "./Pages/Projects/AllProjects";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import ContactUs from "./Pages/ContactUs/ContactUs";

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
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
