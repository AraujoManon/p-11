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
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
=======
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
 
>>>>>>> e80cfee4364e57c2a803bf2fbf0b11666d0ebd05
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
