import React from "react";
import classNames from "classnames";
import "../css/modal.css";

function Modal({ children, isActive, setActive }) {
 
  return (
    <div
      className={classNames("modal__popup", { 'active__modal': isActive })}
      onClick={() => setActive(false)}
    >
      <div className="modal__inner">{children}</div>
    </div>
  );
}
export default Modal;
