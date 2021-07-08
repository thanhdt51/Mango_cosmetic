import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Layout/Header";
import Slide from "./Layout/Body/Slide";
import Footer from "./Layout/Footer";

import "./App.scss";
import BestSellerSwiper from "./Layout/Body/BestSellerSwiper";
import Banner from "./Layout/Body/Banner";

const banners = [
  {
    className: "banner1",
    title: "THE POWER OF SKINCARE",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card&apos;s content.",
    imgSrc: {
      desktop:
        "//cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_skincare_665ac386-082c-4afb-b759-4ac89f434d63_2880x.progressive.jpg?v=1589555548, //cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_skincare_665ac386-082c-4afb-b759-4ac89f434d63_2880x@2x.progressive.jpg?v=1589555548 2x",
      mobile:
        "//cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_mobile_skincare_414x.progressive.jpg?v=1589555566, //cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_mobile_skincare_414x@2x.progressive.jpg?v=1589555566 2x",
      default:
        "//cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_skincare_665ac386-082c-4afb-b759-4ac89f434d63_2880x.progressive.jpg?v=1589555548",
    },
  },
  {
    className: "banner2",
    title: "THE POWER OF MAKEUP",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card&apos;s content.",
    imgSrc: {
      desktop:
        "//cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_makeup_3d95254d-6830-4069-ace1-3b1942068027_2880x.progressive.jpg?v=1589556133, //cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_makeup_3d95254d-6830-4069-ace1-3b1942068027_2880x@2x.progressive.jpg?v=1589556133 2x",
      mobile:
        "//cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_mobile_makeup_9f9d0f34-ef8b-4062-bbb3-a21d264b23dd_414x.progressive.jpg?v=1589555965, //cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_mobile_makeup_9f9d0f34-ef8b-4062-bbb3-a21d264b23dd_414x@2x.progressive.jpg?v=1589555965 2x",
      default:
        "//cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_makeup_3d95254d-6830-4069-ace1-3b1942068027_2880x.progressive.jpg?v=1589556133",
    },
  },
];

function App() {
  return (
    <>
      <Header />

      <main>
        <Slide />
        <BestSellerSwiper />
        {banners.map((banner) => (
          <Banner
            key={banner.title}
            className={banner.className}
            title={banner.title}
            description={banner.description}
            imgSrc={banner.imgSrc}
          />
        ))}
        ;
      </main>

      <Footer />
    </>
  );
}

export default App;
