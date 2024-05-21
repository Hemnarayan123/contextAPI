import React from "react";
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";




function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/ProductDetails/:id" element={<ProductDetails/>}></Route>
    </Routes>
   </Router>
    </> 
  );
}

export default App;
