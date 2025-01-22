import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <>
      <div className="min-h-screen px-14 bg-white flex flex-col">
        <NavBar />
        <Home/>
      </div>
    </>
  );
}

export default App;
