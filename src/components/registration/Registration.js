import React, { useState, useEffect } from "react";
import axios from "axios";

import SocialNetworkReg from "../socialNetworkReg/SocialNetworkReg";
import x from "../img/x.svg";
import eye from "../img/eye.svg";
import eyeNo from "../img/eyeNo.svg";
import "./Registration.css";
import { registration } from "../actions/user";

export default function Registration(props) {
  const {
    setPopupReg,
    popupReg,
    toggle,
    popupPolicy,
    setPopupPolicy,
    popupRules,
    setPopupRules,
  } = props;

  const [passwordType, setPasswordType] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const [check, setCheck] = useState(false);

  // если нет ошибок почты и пароля и стоит галочка в чек боксе о согласии с политикой и правилами, то кнопка Регистрация активна
  useEffect(() => {
    if (emailError || passwordError || !check) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, check]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /[@]{1,}[a-z,0-9, -.]{1,63}[.]{1}[a-zA-Z]{1,15}/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };
  // console.log("email", email);

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const pas =
      /(?=.*[0-9])(?=.*[a-zA-Z! # $ % & ' * + - / = ? ^ _ ` { | } ~])/;
    if (
      e.target.value.length < 7 ||
      !pas.test(String(e.target.value).toLowerCase())
    ) {
      setPasswordError(
        "Пароль должен содержать буквы(a-z) и цифры и быть длинной не менее 7 символов"
      );
    } else {
      setPasswordError("");
    }
  };
  // console.log("password", password);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailVisited(true);
        break;
      case "password":
        setPasswordVisited(true);
        break;
      default:
        console.log("неизвестная ошибка при вводе email или password");
    }
  };

  function postData() {
    axios
      .post("http://uranus123.herokuapp.com/register", { email, password })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="loginWrapper">
      <div className="loginContainer container">
        <div>
          <button className="closeBtn" onClick={() => setPopupReg(!popupReg)}>
            <img src={x} alt="{x}" />
          </button>
        </div>
        <div className="loginTitle">Регистрация </div>
        <div className="regSocialIcons">
          <SocialNetworkReg />
        </div>
        <div className="lineContainer">
          <div className="lineReg"></div>
          <div className="lineText">или</div>
          <div className="lineReg"></div>
        </div>
        <div className="loginEmail">
          <label>Email</label>
          <input
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            name="email"
            value={email}
            type="email"
            placeholder="example@mail.com"
            className="email"
          />
          {emailVisited && emailError && (
            <div className="errorMessage">{emailError}</div>
          )}
        </div>
        <div className="loginPassword">
          <label>Пароль</label>
          <div className="passwordField">
            <input
              onChange={(e) => passwordHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="password"
              value={password}
              type={passwordType ? "password" : "text"}
              className="password"
            />
            {passwordType ? (
              <img
                className="passwordImg"
                src={eyeNo}
                alt="eyeNo"
                onClick={() => setPasswordType(!passwordType)}
              />
            ) : (
              <img
                className="passwordImg"
                src={eye}
                alt="eye"
                onClick={() => setPasswordType(!passwordType)}
              />
            )}
          </div>
          {passwordVisited && passwordError && (
            <div className="errorMessage">{passwordError}</div>
          )}
        </div>
        <div className="CheckboxRegBtn">
          <input
            type="checkbox"
            checked={check}
            onChange={() => setCheck(!check)}
          />
          <label>
            Я согласен с
            <button
              className="docsBtn"
              onClick={() => setPopupPolicy(!popupPolicy)}
            >
              политикой конфиденциальности
            </button>
            и{" "}
            <button
              className="docsBtn"
              onClick={() => setPopupRules(!popupRules)}
            >
              пользовательским соглашением
            </button>
          </label>
        </div>
        <button onClick={postData} className="regBtn" disabled={!formValid}>
          Регистрация
        </button>
        <div className="backToLogin">
          Уже зарегистрированы? <button onClick={toggle}>Войти</button>
        </div>
      </div>
    </div>
  );
}
