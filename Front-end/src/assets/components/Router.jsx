import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

const Router = () => {
    return (
      <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer /> </BrowserRouter>
    );
  };
  
  export default Router;