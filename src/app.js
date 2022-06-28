import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Singlecocktail from "./pages/singlecocktail";
import Error from "./pages/error";
// import { useGlobalContext } from "./context";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about/*" element={<About></About>}></Route>
        <Route
          path="/singlecocktail/:id"
          element={<Singlecocktail></Singlecocktail>}
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
