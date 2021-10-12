import React from "react";
import footerImg from "../../../img/footerImg.svg";
import logoChB from "../../../img/logoChB.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerContainer container">
        <div className="footerImg">
          <img src={footerImg} alt="{footerImg}" />
        </div>
        <div className="footerText">
          <div className="footerContacts">
            <div className="footerLogo">
              <img src={logoChB} alt="{logoChB}" />
            </div>
            <div className="fone">+ 375 (29) 333 66 55 </div>
            <div className="site">it-coty@gmail.com</div>
          </div>

          <div className="footerMap">
            <ul>
              <li>Главная</li>
              <li>Вакансии</li>
              <li>Стажировки</li>
            </ul>
            <ul>
              <li>События</li>
              <li>Новости</li>
            </ul>
            <ul>
              <li>Документы</li>
              <li>Бизнесу</li>
            </ul>
          </div>
        </div>
        <div className="line"></div>

        <div className="footerInfo">
          <div>
            ООО «IT Coty» Зарегистрировано Минским горисполкомом 09.07.2020.
            220089 г.Минск, пр-т Дзержинского, 57, 10 этаж, помещение 45-1,
            комната 2.
          </div>
          <div>
            Режим работы предприятия: пн.-пт. 09.00-18.00, вых. дн. – сб., вс.
            Режим работы сайта – круглосуточно. E-mail ООО «ВСЯ РАБОТА»
            support@rabota.by
          </div>
          <div>
            р/с BY51ALFA30122667720010270000 ЗАО "Альфа-банк" 220013 г. Минск,
            ул. Сурганова, 43‑47
          </div>
        </div>
      </div>
    </div>
  );
}
