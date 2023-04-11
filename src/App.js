import React from "react";
import {  Route, Routes } from "react-router-dom";
import  Home  from "./pages/home/Home";
import Destination from "./pages/destination/Destinantion"
import Packages from "./pages/package/Package";
import Header from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Aboutus from "./pages/aboutUs/AbouttUs";
import PackageDestination from "./pages/packageTrip/packageDestination";
import PrivateTrip from "./pages/packageTrip/privateTrip";
import OpenTrip from "./pages/packageTrip/packageOpentrip";
function App() {
  return (
   <>
   
   <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/discovery" element={<Home />}/>
    <Route path="/destination" element={<Destination />}/>
    <Route path="/package" element={<Packages />}/>
    <Route path="/about" element={<Aboutus />}/>
    <Route path='/packagedestination' element={<PackageDestination/>}/>
    <Route path="/privatetrip" element={<PrivateTrip/>}/>
    <Route path="/Opentrip" element={<OpenTrip/>}/>
    </Routes>
    <Footer/>
  

   </> 
  );
}

export default App;
