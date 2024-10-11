import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/reserve" element={<ReservationPage />} />
        <Route path="/new" element={<ReservationPage mode="new" />} />
        <Route path="/modify" element={<ReservationPage mode="modify" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
