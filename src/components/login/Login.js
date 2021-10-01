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
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /[a–z, A–Z,0-9, ! # $ % & ' * + - / = ? ^ _ ` { | } ~]1-64[@]1[a-z,0-9, -.]1-63[.]1C2-3/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const pas =
      /[А-Я,а-я,A-Z,a-z,0-9, ! # $ % & ' * + - / = ? ^ _ ` { | } ~]7-64/;
    if (!pas.test(String(e.target.value).toLowerCase())) {
      setPasswordError(
        "Некорректный password - длинна должна быть не менее 7 символов"
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
    axios.post("https//sever", { email, password });
  }

  return (
    <div className="transparent">
      <div className="form-inner">
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

        <hr />
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
          // onChange={(e) => setEmail(e.target.value)}
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
          // onChange={(e) => setPassword(e.target.value)}
          className="password"
        />

        <button disabled={!formValid} onClick={postData} className="btn">
          Войти
        </button>

        <Link to="/registration">
          <button type="submit" className="btn">
            Зарегистрироваться
          </button>
        </Link>
        <input type="checkbox" id="custom-checkbox" />
        <label for="custom-checkbox">Запомнить меня</label>
        <p>
          Продолжая, вы соглашаетесь с нашей{" "}
          <Link to="/policy"> политикой конфиденциальности </Link>и
          <Link to="/rules"> пользовательским соглашением </Link>.
        </p>
        <p>хотите восстановить пароль?</p>
      </div>
    </div>
  );
}
