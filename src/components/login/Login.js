import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
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
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const rec =
      /[А-Я,а-я,A-Z,a-z,0-9, ! # $ % & ' * + - / = ? ^ _ ` { | } ~]{7,}/;
    if (!rec.test(String(e.target.value).toLowerCase())) {
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
    }
  };

  function postData() {
    axios.post("https//sever", { email, password });
  }

  return (
    <div className="transparent">
      <div className="form-inner">
        <h3>Зарегистрируйтесь с помощью:</h3>

        <div>
          <input type="text" placeholder="Продолжить через facebook" />
          <input type="text" placeholder="Продолжить через linkedin" />
          <input type="text" placeholder="Продолжить через Google" />
          <p>
            ----------------------------------- или
            -----------------------------------
          </p>
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
        </div>
        <div>
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
        </div>
        <button onClick={postData} className="btn">
          Войти
        </button>
        <div className="buttons">
          <Link to="/registration">
            <button type="submit" className="btn">
              Зарегистрироваться
            </button>
          </Link>
          <input type="checkbox" id="custom-checkbox" />
          <label for="custom-checkbox">Запомнить меня</label>
          <p>
            Продолжая, вы соглашаетесь с нашей политикой конфиденциальности и
            пользовательским соглашением.
          </p>
          <p>хотите восстановить пароль?</p>
        </div>
      </div>
    </div>
  );
}
