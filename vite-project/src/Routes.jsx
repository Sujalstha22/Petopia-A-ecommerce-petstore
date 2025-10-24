import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import App from "./App";
import Notfound from "./Components/NotFound";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<div>Something went wrong</div>}
    >
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="blog" element={<Blog />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

export default router;
