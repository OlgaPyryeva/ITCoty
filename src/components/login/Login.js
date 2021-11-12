import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import SocialNetworkReg from "../socialNetworkReg/SocialNetworkReg";
import x from "../img/x.svg";
import eye from "../img/eye.svg";
import eyeNo from "../img/eyeNo.svg";
import { useDispatch } from "react-redux";
import { login } from "../actions/user";

export default function Login(props) {
  const { setPopup, popup, toggle } = props;
  const [passwordType, setPasswordType] = useState(true);
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "пароль не может быть пустым"
  );

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
      .post("http://uranus123.herokuapp.com/login", { email, password })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="loginWrapper">

      <div className="loginContainer">

        <div>
          <button className="closeBtn" onClick={() => setPopup(!popup)}>
            <img src={x} alt="{x}" />
          </button>
        </div>
        <div className="loginTitle">Авторизация </div>
        <div className="loginForm">
          <div className="loginEmail">
            <label>Email</label>
            <input
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="email"
              value={email}
              type="email"
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
                type={passwordType ? "password" : "text"}
                name="password"
                value={password}
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
          </div>
          {passwordVisited && passwordError && (
            <div className="errorMessage">{passwordError}</div>
          )}

          <button className="newPassword"> Восстановить пароль?</button>

          <div>
            {/* <button onClick={postData} className="btn"> */}
            <button
              onClick={() => dispatch(login(email, password))}
              className="btn"
            >
              Войти
            </button>
          </div>
          <div className="socialBtn">
            <SocialNetworkReg />
          </div>
        </div>
        <div className="loginRegText">
          Пока не зарегистрированы?
          {/* <button onClick={() => setPopupReg(!popupReg)}>Регистрация</button> */}
          <button onClick={toggle}>Регистрация</button>
        </div>
      </div>
    </div>
  );
}
