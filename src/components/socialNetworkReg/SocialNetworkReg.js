import React from "react";
import facebook from "../img/facebook.svg";
import google from "../img/google.svg";
import linkedin from "../img/linkedin.svg";
import "./SocialNetworkReg.css";

export default function socialNetworkReg() {
  return (
    <div className="socialIconWrapper">
      <div className="socialIconContainer">
        <div className="socialIconBtn">
          <button className="socialBtn">
            <div> Продолжить через</div>
            <div>
              <img src={facebook} alt="facebook logo" />
            </div>
          </button>
        </div>
        <div className="socialIconBtn">
          <button className="socialBtn">
            <div>Продолжить через</div>
            <div>
              {" "}
              <img src={linkedin} alt="linkedin logo" />
            </div>
          </button>
        </div>
        <div className="socialIconBtn">
          <button className="socialBtn">
            <div> Продолжить через</div>{" "}
            <div>
              <img src={google} alt="facebook logo" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
