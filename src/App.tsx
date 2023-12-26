import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
