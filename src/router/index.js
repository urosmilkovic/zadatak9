import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Brands, Checkout, Home, Product, Products } from "../pages";
import { CartButton, Footer, Navigation } from "../components/custom";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:sort" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/brands" element={<Brands />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <CartButton />
    </BrowserRouter>
  );
};

export default Router;
