import React from "react";
import { Form, Button } from "react-bootstrap";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Icon from "../Icon";
import s from "./SignIn.module.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignIn: true,
    };

    this.switchForm = this.switchForm.bind(this);
  }

  switchForm() {
    this.setState((state) => ({
      isSignIn: !state.isSignIn,
    }));
  }

  renderForm() {
    const { isSignIn } = this.state;

    if (isSignIn) {
      return (
        <>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember password" />
          </Form.Group>
          <Button variant="primary" block>
            Sign In
          </Button>
          <Button onClick={this.switchForm} variant="link" block>
            Forgot password?
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
        </>
      );
    }

    return (
      <>
        <Button variant="primary" block>
          Reset Password
        </Button>
        <Button onClick={this.switchForm} variant="link" block>
          Back to Sign In
        </Button>
      </>
    );
  }

  render() {
    return (
      <Form className={s.signInForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {this.renderForm()}
      </Form>
    );
  }
}

export default SignIn;
