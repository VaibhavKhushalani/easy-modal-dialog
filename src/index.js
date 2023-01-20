import React from "react";
import ModalBox from "./modalBox";
import "./index.css";
const EasyModal = (props) => {
  console.log(props);
  return (
    <div
      className="easy-modal-main"
      style={{ display: props.open ? "flex" : "none" }}
    >
      <ModalBox data={props.body} close={props.onClose} />
    </div>
  );
};

export default EasyModal;
