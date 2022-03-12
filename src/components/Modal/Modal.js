import React from "react";

import "./Modal.css";

import ImgRules from "../../images/image-rules.svg";

export default function Modal({ open }) {
  return (
    <div className="container_modal">
      <div className="container_modal_rules">
        <div className="container_modal_rules_header">
          <p className="rules_text">rules</p>
          <button className="rules_btn" onClick={open}>
            x
          </button>
        </div>
        <img className="img_rules" src={ImgRules} alt=""></img>
      </div>
    </div>
  );
}
