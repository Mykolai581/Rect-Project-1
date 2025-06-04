import ButtonElement from "../ButtonElement/ButtonElement";
import Animation from "../Animation/Animation";
import "./MainSectionApplyApp.css";
import Image from "../../../img/MainImage/Image2.png";
import { useTranslation } from "react-i18next";

export default function MainSectionApplyApp() {
  const { t } = useTranslation();

  return (
    <>
      <div className="main__section-apply section-apply">
        <div className="section-apply__container">
          <div className="section-apply__image">
            <img src={Image} alt="Image" />
          </div>
          <div className="section-apply__content content-section-apply">
            <Animation>
              <h2 className="section-apply-title">{t("Main.Title2")}</h2>
              <p className="section-apply-text">{t("Main.Text")}</p>
            </Animation>
            <ButtonElement
              text={t("Main.Learn More")}
              style={{ marginRight: 10, marginBottom: 20 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
