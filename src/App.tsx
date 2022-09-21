import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Report from "./components/stock/Report";


const App: React.FC = () => {
  return (
    <div >
      <nav className="navbar navbar-expand navbar-dark bg-success">
        <a href="/stocksData" className="navbar-brand">
          StockAssignment
        </a>       
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Report/>} />
          <Route path="/stocksData" element={<Report/>} />        
        </Routes>
      </div>
    </div>
  );
}

export default App;
