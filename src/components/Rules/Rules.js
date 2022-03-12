import React, { useState } from "react";

import Modal from "../Modal/Modal";

import "./Rules.css";

function Rules() {
  const [modal, setModal] = useState(false);

  const open = () => {
    setModal(!modal);
  };
  return (
    <div className="container_rules">
      <button onClick={open} className="btn_rules">
        rules
      </button>

      {modal ? <Modal open={open} /> : null}
    </div>
  );
}

export default Rules;
