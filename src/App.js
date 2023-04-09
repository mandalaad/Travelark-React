import React from "react";
import {  BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {Destination} from "./pages/destination/Destinantion"
import Packages from "./pages/package/Package";
import Header from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <>
   
   <Router>
   <Header/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/discovery" element={<Home />}/>
    <Route path="/destination" element={<Destination />}/>
    <Route path="/package" element={<Packages />}/>
    </Routes>
    <Footer/>
   </Router>
  
   </> 
  );
}

export default App;
