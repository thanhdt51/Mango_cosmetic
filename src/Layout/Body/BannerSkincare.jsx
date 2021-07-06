import React from "react";
import { Card, Button } from "react-bootstrap";

import s from "./BestSellerSwiper.module.scss";

function BannerSkincare() {
  return (
    <Card className={s.card}>
      <Card.Body className={s.cardBody}>
        <Card.Text>
          <h3 className={s.cardTitle}>THE POWER OF SKINCARE</h3>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </p>
          <Button variant="primary" size="lg">
            SHOP NOW
          </Button>
        </Card.Text>
      </Card.Body>
      <Card.Img
        variant="bottom"
        src="//cdn.shopify.com/s/files/1/0085/5362/7707/files/tm20_new_hp_skincare_665ac386-082c-4afb-b759-4ac89f434d63_2880x.progressive.jpg?v=1589555548"
      />
    </Card>
  );
}

export default BannerSkincare;
