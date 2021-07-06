import React from "react";
import PropTypes from "prop-types";
import { Modal, Tab, Tabs } from "react-bootstrap";

import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import s from "./SignModal.module.scss";

function SignModal(props) {
  const { show, hideModal } = props;

  return (
    <Modal show={show} fullscreen="lg-down" onHide={hideModal}>
      <Modal.Header className={s.modalHeader} closeButton>
        <Modal.Title className={s.modalTitle}>
          <div className={s.logoCenter}>
            <Logo className={s.logo} />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={s.modalBody}>
        <Tabs
          defaultActiveKey="signin"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="signin" title="Sign In">
            <SignIn />
          </Tab>
          <Tab eventKey="signup" title="Sign Up">
            <SignUp />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

SignModal.propTypes = {
  show: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default SignModal;
