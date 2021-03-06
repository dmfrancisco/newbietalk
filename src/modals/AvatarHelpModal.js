import React from "react";
import { withRouter } from "react-router";
import Modal from "./Modal";
import Help from "../images/Help";
import { Cross } from "../Icons";

const AvatarHelpModal = ({ history }) => (
  <Modal
    onDismiss={history.goBack}
    className="pin-b pin-x absolute max-w-xl mx-auto px-6 sm:px-15 pt-6 max-h-full"
  >
    <div className="animated bounce-in-up" style={{ maxWidth: "28.125rem" }}>
      <div className="Box bg-purple-lightest mb-6">
        <button className="Button rounded-full bg-grey-light p-3 -mt-6 -ml-6 float-left">
          <Cross className="block" />
        </button>

        <h3 className="text-lg italic m-8 mb-6">Let’s build your avatar…</h3>

        <p className="text-brown leading-normal mx-8 mb-6">
          To keep Newbie Talk as anonymous as people want it to be, instead of
          uploading a photo you can create your own Avataaar.
        </p>

        <p className="text-brown leading-normal mx-8 mb-8">
          Have questions or constructive feedback? <br />Let me know at{" "}
          <a href="mailto:david@robo54.com" className="text-inherit">
            david@robo54.com
          </a>!
        </p>
      </div>

      <Help className="block" />
    </div>
  </Modal>
);

export default withRouter(AvatarHelpModal);
