import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import facebook from "./img/facebook.svg";
import google from "./img/google.svg";
import linkedIn from "./img/linkedIn.svg";
import Policy from "../docs/Policy";
import Rules from "../docs/Rules";

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
      .get("http://uranus123.herokuapp.com", { email, password })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="transparent">
      <div className="form-inner">
        <div class="cl-btn-7"></div>
        <h3>Зарегистрируйтесь с помощью:</h3>
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
          placeholder="Создать аккаунт с помощью email"
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
