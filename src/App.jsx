import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Slide from "./Body/Slide"
import Footer from "./Footer";

import "./App.scss";
import BestSellerSwiper from "./Body/BestSellerSwiper";


function App() {
  return (
    <>
      <Header />

      <main>
        <Slide />
        <BestSellerSwiper />
      </main>

      <Footer />
    </>
  );
}

export default App;
