import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Reset from "./components/login/Reset";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
