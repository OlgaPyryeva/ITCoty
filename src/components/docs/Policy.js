import React from "react";
import x from "../img/x.svg";
import "./Policy.css";

export default function Policy(props) {
  const { setPopupPolicy, popupPolicy } = props;
  return (
    <div className="policyWrapper">
      <div className="policyContainer">
        <div className="policyTitle">
          <h1>Политика конфиденциальности</h1>
          <div className="policyText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <div>
            <button onClick={() => setPopupPolicy(!popupPolicy)}>
              <img src={x} alt="{x}" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
