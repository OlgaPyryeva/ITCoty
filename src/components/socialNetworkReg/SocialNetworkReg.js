import React from "react";
import facebook from "../socialNetworkReg/img/facebook.svg";
import google from "../socialNetworkReg/img/google.svg";
import linkedIn from "../socialNetworkReg/img/linkedIn.svg";
import Policy from "../docs/Policy";
import Rules from "../docs/Rules";

export default function socialNetworkReg() {
  return (
    <div>
      <button>
        <img
          src={facebook}
          alt="facebook logo"
          title="Продолжить через facebook"
        />
      </button>
      <button>
        <img
          src={linkedIn}
          alt="linkedin logo"
          title="Продолжить через linkedin"
        />
      </button>
      <button>
        <img
          src={google}
          alt="facebook logo"
          title="Продолжить через facebook"
        />
      </button>
    </div>
  );
}
