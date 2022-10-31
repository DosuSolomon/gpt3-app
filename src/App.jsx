import { useState } from "react";
import "./App.css";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
function App() {
  return (
    <div className="container">
      <div>
        <Navbar />
        <Header />
      </div>
      <div>
        Hello
      </div>
    </div>
  );
}

export default App;
