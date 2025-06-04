import "./MainSectionClientsApp.css";
import Image3 from "../../../img/MainImage/Image3.png";
import Animation from "../Animation/Animation";
import { useTranslation } from "react-i18next";

export default function MainSectionClientsApp() {
  const { t } = useTranslation();

  return (
    <div className="main__clients clients">
      <div className="clients__container">
        <Animation>
          <div className="clients__content">
            <h2 className="clients__title">{t("Main.Title3")}</h2>
            <div className="clients__text">
              <p className="text">{t("Main.Text1")}</p>
              <p className="text">{t("Main.Text2")}</p>
              <p className="text">{t("Main.Text3")}</p>
              <p className="text">{t("Main.Text")}</p>
            </div>
          </div>
        </Animation>
        <div className="clients__image">
          <img src={Image3} alt="Image" />
        </div>
      </div>
    </div>
  );
}
