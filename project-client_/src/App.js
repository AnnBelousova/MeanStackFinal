import "./App.css";
import React from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navigation";
import { Help } from "./pages/Help";
import { Policy } from "./pages/Policy";

import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import GiftCardsPage from "./pages/GiftCardsPage";
import UserProfilePage from "./pages/UserProfilePage";
import DealsPage from "./pages/DealsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import NewArrivals from "./pages/NewArrivals";
import WishList from "./pages/WishList";
import AddItemToWishList from "./pages/AddItemToWishList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="wrapper">
          <Routes>
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="register" element={<Register />} />

            <Route path="/" element={<Login />} />
            <Route path="contactus" element={<ContactPage />} />

            <Route path="browse" element={<MainPage />} />
            <Route path="giftcards" element={<GiftCardsPage />} />

            <Route path="userprofile" element={<UserProfilePage />} />

            <Route path="help" element={<Help />} />
            <Route path="policy" element={<Policy />} />
            <Route path="deals" element={<DealsPage />} />
            <Route path="newarrivals" element={<NewArrivals />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="additemtowishlist" element={<AddItemToWishList />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
