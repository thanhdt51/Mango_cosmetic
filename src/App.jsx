import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Slide from "./Body/Slide"
import Footer from "./Footer";

import "./App.scss";


function App() {
  return (
    <>
      <Header />

      <main>
        <Slide />
      </main>

      <Footer />
    </>
  );
}

export default App;
