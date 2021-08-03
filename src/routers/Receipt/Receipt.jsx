import React from "react";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Icon from "../../components/Icon";
import Layout from "../../components/Layout";

import s from "./Receipt.module.scss";

import Button from "../../components/Button";

function Receipt() {
  return (
    <Layout className={s.receipt}>
      <div>
        <Icon icon={faCheckCircle} color="#24e924" className={s.icon} />
        <h2>Successfully Purchased!</h2>
        <p>Your order has been completed!</p>
        <a href="/">
          <Button>CONTINUE TO SHOPPING</Button>
        </a>
      </div>
    </Layout>
  );
}

export default Receipt;
