import React from "react";
import x from "../img/x.svg";
import "./Rules.css";

export default function Rules(props) {
  const { setPopupRules, popupRules } = props;
  return (
    <div className="rulesWrapper">
      <div className="rulesContainer">
        <div className="rulesTitle">
          <h1>Пользовательское соглашение</h1>
          <div className="rulesText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <div>
            <button onClick={() => setPopupRules(!popupRules)}>
              <img src={x} alt="{x}" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
