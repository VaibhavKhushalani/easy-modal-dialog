import React from "react";
import { RxCross2 } from "react-icons/rx";
const ModalBox = (props) => {
  return (
    <div className="easy-modal-body">
      <span className="close" title="Close" onClick={props.close}>
        <RxCross2 size="21" />
      </span>
      {props.data}
    </div>
  );
};

export default ModalBox;
