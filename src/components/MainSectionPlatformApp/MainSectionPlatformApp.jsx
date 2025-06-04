import ButtonElement from "../ButtonElement/ButtonElement";
import "./MainSectionPlatformApp.css";
import Image from "../../../img/MainImage/Image.png";
import Icon from "../../../img/MainImage/icon.svg";
import Animation from "../Animation/Animation";
import Img1 from "../../../img/MainImage/img1.png";
import Img2 from "../../../img/MainImage/img2.png";
import Img3 from "../../../img/MainImage/img3.png";
import Img4 from "../../../img/MainImage/img4.png";
import { useTranslation } from "react-i18next";

export default function MainSectionPlatformApp() {
  const { t, i18n } = useTranslation();
  const image = "Image";
  // className="content-section-info  "
  return (
    <>
      <div className="main__section-platform section-platform">
        <div className="section-platform__container">
          <div className="content__body">
            <div className="section-platform__content content-section-platform">
              <Animation>
                {" "}
                <p className="content-section-info  ">
                  {t("Main.Next genaretion platform")}
                </p>
                <h2 className="content-section-title">{t("Main.Title1")}</h2>
                <p className="content-section-text">{t("Main.Text")}</p>
              </Animation>
              <ButtonElement
                text={t("Main.Get Started")}
                style={{ marginRight: 10, marginBottom: 20 }}
              />
              <ButtonElement icon={Icon} text={t("Main.Watch Video")} />
            </div>
            <div className="section-platform__image">
              <img src={Image} alt={image} />
            </div>
          </div>
          <div className="section-platform__images">
            <div className="image-item">
              <img src={Img1} alt={image} />
            </div>
            <div className="image-item">
              <img src={Img2} alt={image} />
            </div>
            <div className="image-item">
              <img src={Img3} alt={image} />
            </div>
            <div className="image-item">
              <img src={Img4} alt={image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
