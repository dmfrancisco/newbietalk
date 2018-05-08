import React from 'react';
import { withRouter } from 'react-router';
import NotFoundImage from "./images/NotFound";

const NotFound = (props) => (
  <div className="pin fixed flex justify-center items-center z-50" onClick={props.history.goBack}>
    <div className="pin fixed opacity-50" style={{ background: "#34a245" }} />

    <div className="relative p-15 rounded-lg text-center" style={{ background: "#34a245" }}>
      <NotFoundImage />
      <h1 className="text-4xl text-white">Soon</h1>
    </div>
  </div>
);

export default withRouter(NotFound);
