import "./HeaderApp.css";
import Logo from "../../../img/Logo.svg";
import ButtonElement from "../ButtonElement/ButtonElement";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function HeaderApp() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <a href="#" className="link-btn">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <button
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="menu-toggle__bar"></span>
            <span className="menu-toggle__bar"></span>
            <span className="menu-toggle__bar"></span>
          </button>
          <div className={`header__menu ${isOpen ? "active" : ""}`}>
            <ul className="menu__list">
              <li className="menu__item item-menu">
                <a href="#" className="item-menu__link">
                  {t("Header.Home")}
                </a>
              </li>
              <li className="menu__item item-menu">
                <a href="#" className="item-menu__link">
                  {t("Header.About")}
                </a>
              </li>
              <li className="menu__item item-menu">
                <a href="#" className="item-menu__link">
                  {t("Header.Services")}
                </a>
              </li>
              <li className="menu__item item-menu">
                <a href="#" className="item-menu__link">
                  {t("Header.Blog")}
                </a>
              </li>
              <li className="menu__item item-menu">
                <a href="#" className="item-menu__link">
                  {t("Header.Contact")}
                </a>
              </li>
            </ul>
          </div>{" "}
          <ButtonElement text={t("Header.Sign In")} />
        </div>
      </header>
    </>
  );
}
