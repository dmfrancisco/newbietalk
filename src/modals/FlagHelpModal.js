import React from "react";
import { withRouter } from "react-router";
import Modal from "./Modal";
import Flag from "../images/Flag";
import { Cross } from "../Icons";

const FlagHelpModal = ({ history }) => (
  <Modal
    onDismiss={history.goBack}
    className="pin-b pin-x absolute max-w-xl mx-auto px-6 sm:px-15 -mb-6 pt-15 sm:overflow-hidden max-h-full"
  >
    <div
      className="animated bounce-in-up float-right"
      style={{ maxWidth: "28.125rem" }}
    >
      <div className="Box bg-yellow-lightest hyphens mb-6">
        <button className="Button rounded-full bg-grey-light p-3 -mt-6 -ml-6 float-left">
          <Cross className="block" />
        </button>

        <h3 className="text-lg italic m-8">
          Keeping Newbie Talk friendly and safe
        </h3>

        <p className="text-brown leading-normal m-8 mb-4">
          We try to design features that incentivize good behavior, but we know
          it’s not enough by itself.
        </p>

        <p className="text-brown leading-normal m-8 mt-4">
          Every time you encounter something in any way innapropriate, please
          let us know by clicking on the flag available on the bottom right
          corner.
        </p>
      </div>

      <Flag className="block float-right" style={{ marginRight: -6 }} />
    </div>
  </Modal>
);

export default withRouter(FlagHelpModal);
