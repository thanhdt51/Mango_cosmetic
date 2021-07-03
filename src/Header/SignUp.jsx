import React from "react";
import {Form, Button} from "react-bootstrap";

import s from "./SignUp.module.scss"

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

     {/*  <div>
        <a href="#">
          <Icon icon={faFacebookF} color="black" />
        </a>
        <a href="#">
          <Icon icon={faGoogle} color="black" />
        </a>
        <a href="#">
          <Icon icon={faTwitter} color="black" />
        </a>
      </div> */}
    </Form>
  );
}

export default SignUp;
