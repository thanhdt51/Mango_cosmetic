import React from "react";
import { Form, Button } from "react-bootstrap";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Icon from "../Icon";

import s from "./SignUp.module.scss";

function SignUp() {
  return (
    <Form className={s.signUpForm}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Creat a password" />
      </Form.Group>
      <Button variant="primary" block>
        Sign Up
      </Button>

      <div className={s.orText}>
        <span>Or</span>
      </div>

      <div className={s.signInSocial}>
        <a className={s.fb} href="#">
          <Icon icon={faFacebook} color="#3B5999" />
        </a>
        <a className={s.gg} href="#">
          <Icon icon={faGoogle} color="red" />
        </a>
        <a className={s.tt} href="#">
          <Icon icon={faTwitter} color="#4688F1" />
        </a>
      </div>

    </Form>
  );
}

export default SignUp;
