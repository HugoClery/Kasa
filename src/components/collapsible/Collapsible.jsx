/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState } from "react";
import FlecheHaut from "../../../src/assets/fleche-haut.png";
import "./collapsible.scss";

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpening = () => {
    setIsOpen(!isOpen);
  };

  const [rotateArrow, setRotateArrow] = useState(false);
  const handleRotate = () => {
    setRotateArrow(!rotateArrow);
  };
  const rotate = rotateArrow ? "rotate(-180deg)" : "rotate(0)";

  const click = () => {
    toggleOpening();
    handleRotate();
    console.log("click open", isOpen);
    console.log("click arrow", rotateArrow);
  };

  return (
    <div className="desc_ctn">
      <div className="desc_ctn_flex" onClick={click}>
        <button className="desc_ctn_btn">{props.label}</button>
        <img
          src={FlecheHaut}
          alt="Flêche"
          style={{ transform: rotate, transition: "all 0.6s ease" }}
        />
      </div>

      <div
        className="transition"
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Collapsible;
