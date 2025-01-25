import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <NavBar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
