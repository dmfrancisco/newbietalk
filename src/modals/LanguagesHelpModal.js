import React from "react";
import { withRouter } from "react-router";
import Modal from "../Modal";
import Help from "../images/Help";
import { Cross } from "../Icons";

const LanguagesHelpModal = props => (
  <Modal onDismiss={props.history.goBack} className="pin-b pin-x absolute max-w-xl mx-auto px-15">
    <div className="animated bounceInUp w-1/2">
      <div className="Box bg-purple-lightest mb-6">
        <button className="Button rounded-full bg-grey-light p-3 -mt-6 -ml-6 float-left">
          <Cross className="block" />
        </button>

        <h3 className="text-lg italic m-8 mb-6">What languages do you speak?</h3>

        <p className="text-brown leading-normal mx-8 mb-6">
          In the first field, we ask you to enter the language you are most comfortable with. If you
          speak other languages, you can add up to 2 more.
        </p>

        <p className="text-brown leading-normal mx-8 mb-6">
          Next to each text field you may see a flag or a two-letter code. This allows us to display
          country flags in your profile. For example, if you’re a proud brazilian that knows
          portuguese, you can type "Portuguese" and pick the flag of Brazil!
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

export default withRouter(LanguagesHelpModal);
