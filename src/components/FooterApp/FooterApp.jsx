import { useState, useEffect, useRef } from "react";
import "./FooterApp.css";
import { useTranslation } from "react-i18next";
import Logo from "../../../img/FooterImage/LogoFooter.svg";
import Email from "../../../img/FooterImage/Email.svg";
import Phone from "../../../img/FooterImage/Phone.svg";
import Cart from "../../../img/FooterImage/Cart.svg";
import FaceBook from "../../../img/FooterImage/FaceBook.svg";
import Instagram from "../../../img/FooterImage/Instagram.svg";
import Twitter from "../../../img/FooterImage/Twitter.svg";
import In from "../../../img/FooterImage/In.svg";
import YouTube from "../../../img/FooterImage/YouTube.svg";
import Global from "../../../img/FooterImage/Global.svg";
import Arrow from "../../../img/FooterImage/Arrow.svg";

export default function FooterApp() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language;
  const ref = useRef();
  const footerLinks = [
    "Footer.Instagram profile",
    "Footer.New Collection",
    "Footer.Contact Us",
    "Footer.Latest News",
    "Footer.Terms & Conditions",
    "Footer.Purchase Theme",
  ];

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ua" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "ua", label: "Українська" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false);
  };

  // Закривання при кліку поза меню
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLang = languages.find((lang) => lang.code === currentLang);

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__item-main">
            <div className="footer__image">
              <img src={Logo} alt="Logo" />
            </div>
            <p className="footer__title-main">
              {t("Footer.Artificial Intelligence")}
            </p>
            <p className="footer__text text1">{t("Main.Text")}</p>
            <p className="footer__email">
              <img src={Email} alt="Email" />
              Company@gmail.com.com
            </p>
            <p className="footer__phone">
              <img src={Phone} alt="Phone" />
              {t("Footer.Phone")}: (064) 332-1233
            </p>
            <p className="footer__street">
              <img src={Cart} alt="Cart" />
              {t("Footer.450 Wall Street, USA, New York")}
            </p>
          </div>
          <div className="footer__item item-footer">
            <div className="item-footer__title">{t("Footer.INFORMATION")}</div>
            <ul className="item-footer__list">
              <li className="item-footer__items">
                <a href="#" className="item-footer__link">
                  {t("Footer.New Collection")}
                </a>
              </li>
              <li className="item-footer__items">
                <a href="#" className="item-footer__link">
                  {t("Footer.About Store")}
                </a>
              </li>
              <li className="item-footer__items">
                <a href="#" className="item-footer__link">
                  {t("Footer.Contact Us")}
                </a>
              </li>
              <li className="item-footer__items">
                <a href="#" className="item-footer__link">
                  {t("Footer.Latest News")}
                </a>
              </li>
              <li className="item-footer__items">
                <a href="#" className="item-footer__link">
                  {t("Footer.Our Sitemap")}
                </a>
              </li>
              <li className="item-footer__items">
                <a href="#" className="item-footer__link">
                  {t("Footer.Orders History")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item item-footer">
            <div className="item-footer__title">{t("Footer.FOOTER MENU")}</div>
            <ul className="item-footer__list">
              {footerLinks.map((key, index) => (
                <li className="item-footer__items" key={index}>
                  <a href="#" className="item-footer__link">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__item item-footer">
            <div className="item-footer__title">{t("Footer.USEFUL LINKS")}</div>
            <ul className="item-footer__list">
              {footerLinks.map((key, index) => (
                <li className="item-footer__items" key={index}>
                  <a href="#" className="item-footer__link">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__item item-footer">
            <div className="item-footer__title">
              {t("Footer.ABOUT THE STORE")}
            </div>
            <div className="item-footer__text">{t("Main.Text")}</div>
            <div className="item-footer__company company">
              <a href="#" className="company__link">
                www.company.com
              </a>
            </div>
            <div className="item-footer__images">
              <img src={FaceBook} alt="FaceBook" />
              <img src={Instagram} alt="Instagram" />
              <img src={Twitter} alt="Twitter" />
              <img src={In} alt="In" />
              <img src={YouTube} alt="YouTube" />
            </div>

            <div className="lang-switcher" ref={ref}>
              <button className="lang-button" onClick={toggleDropdown}>
                <img
                  className="lang-button__global"
                  src={Global}
                  alt="Global"
                />{" "}
                {selectedLang?.label}{" "}
                <img className="lang-button__arrow" src={Arrow} alt="Arrow" />
              </button>
              {isOpen && (
                <ul className="lang-dropdown">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button onClick={() => changeLanguage(lang.code)}>
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
