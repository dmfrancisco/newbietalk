import React from "react";
import { withRouter } from "react-router";
import Modal from "./Modal";
import Help from "../images/Help";
import { Cross } from "../Icons";

const PronounHelpModal = props => (
  <Modal
    onDismiss={props.history.goBack}
    className="pin-b pin-x absolute max-w-xl mx-auto px-15"
  >
    <div className="animated bounceInUp w-1/2">
      <div className="Box bg-purple-lightest mb-6">
        <button className="Button rounded-full bg-grey-light p-3 -mt-6 -ml-6 float-left">
          <Cross className="block" />
        </button>

        <h3 className="text-lg italic m-8 mb-6">What is your pronoun?</h3>

        <p className="text-brown leading-normal mx-8 mb-6">
          This answer helps us write more personalized messages. Apart from
          that, your pronoun will be visible to others, and you can see their
          pronouns too. This and their Avataaar may help you decide who you want
          to chat with.
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

export default withRouter(PronounHelpModal);
