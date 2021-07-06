import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Layout/Header";
import Slide from "./Layout/Body/Slide";
import Footer from "./Layout/Footer";

import "./App.scss";
import BestSellerSwiper from "./Layout/Body/BestSellerSwiper";
import BannerSkincare from "./Layout/Body/BannerSkincare";

function App() {
  return (
    <>
      <Header />

      <main>
        <Slide />
        <BestSellerSwiper />
        <BannerSkincare />
      </main>

      <Footer />
    </>
  );
}

export default App;
