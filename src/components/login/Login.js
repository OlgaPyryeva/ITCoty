import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Policy from "../docs/Policy";
import Rules from "../docs/Rules";
import SocialNetworkReg from "../socialNetworkReg/SocialNetworkReg";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError && passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

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
      /(?=.*[0-9])(?=.*[a-zA-Z! # $ % & ' * + - / = ? ^ _ ` { | } ~]){7,}/;
    if (!pas.test(String(e.target.value).toLowerCase())) {
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
    <div className="transparent">
      <div className="form-inner">
        <div class="cl-btn-7"></div>
        <h3>Войти с помощью:</h3>
        <SocialNetworkReg />
        <h3>или</h3>
        {emailVisited && emailError && (
          <div className="errorMessage">{emailError}</div>
        )}
        <input
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="email"
          value={email}
          type="text"
          placeholder="Войти в аккаунт с помощью email"
          className="email"
        />
        {passwordVisited && passwordError && (
          <div className="errorMessage">{passwordError}</div>
        )}
        <input
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="password"
          value={password}
          type="text"
          placeholder="Введите пароль"
          className="password"
        />
        <button onClick={postData} className="btn">
          Войти
        </button>
        <Link to="/register">
          <button type="submit" className="btn">
            Зарегистрироваться
          </button>
        </Link>

        <input type="checkbox" id="custom-checkbox" />
        <label for="custom-checkbox">Запомнить меня</label>
        <input type="checkbox" id="policy-checkbox" />
        <label for="policy-checkbox">
          Продолжая, вы соглашаетесь с нашей{" "}
          <Link to="/policy"> политикой конфиденциальности </Link>и
          <Link to="/rules"> пользовательским соглашением </Link>.
        </label>
        <button> Восстановить пароль?</button>
      </div>
    </div>
  );
}
