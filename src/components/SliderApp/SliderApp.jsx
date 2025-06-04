import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SliderApp.css";
import { Pagination } from "swiper/modules";
import SlideIcon1 from "../../../img/MainImage/slideIcon1.svg";
import SlideIcon2 from "../../../img/MainImage/slideIcon2.svg";
import SlideIcon3 from "../../../img/MainImage/slideIcon3.svg";
import SlideIcon4 from "../../../img/MainImage/slideIcon4.svg";
import SlideIcon5 from "../../../img/MainImage/slideIcon5.svg";
import { useTranslation } from "react-i18next";

export default function TestimonialsSlider() {
  const { t } = useTranslation();

  return (
    <div className="main__slider slider">
      <Swiper
        className="slider-swiper"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },

          700: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
          1332: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="slide__item item-slide">
            <div className="item-slide__image">
              <img src={SlideIcon1} alt="Icon" />
            </div>
            <h3 className="item-slide__title">{t("Main.SlideTitle1")}</h3>
            <p className="item-slide__text">{t("Main.Text")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__item item-slide">
            <div className="item-slide__image">
              <img src={SlideIcon2} alt="Icon" />
            </div>
            <h3 className="item-slide__title">{t("Main.SlideTitle2")}</h3>
            <p className="item-slide__text">{t("Main.Text")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__item item-slide">
            <div className="item-slide__image">
              <img src={SlideIcon3} alt="Icon" />
            </div>
            <h3 className="item-slide__title">{t("Main.SlideTitle3")}</h3>
            <p className="item-slide__text">{t("Main.Text")} </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__item item-slide">
            <div className="item-slide__image">
              <img src={SlideIcon4} alt="Icon" />
            </div>
            <h3 className="item-slide__title">{t("Main.SlideTitle4")}</h3>
            <p className="item-slide__text">{t("Main.Text")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__item item-slide">
            <div className="item-slide__image">
              <img src={SlideIcon5} alt="Icon" />
            </div>
            <h3 className="item-slide__title">{t("Main.SlideTitle5")}</h3>
            <p className="item-slide__text">{t("Main.Text")}</p>
          </div>
        </SwiperSlide>

        {/*  */}

        <SwiperSlide>
          <div className="slide__item item-slide">
            <div className="item-slide__image">
              <img src={SlideIcon1} alt="Icon" />
            </div>
            <h3 className="item-slide__title">{t("Main.SlideTitle1")}</h3>
            <p className="item-slide__text">{t("Main.Text")} </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__item item-slide">
            <div className="item-slide__image">
              <img src={SlideIcon2} alt="Icon" />
            </div>
            <h3 className="item-slide__title">{t("Main.SlideTitle2")}</h3>
            <p className="item-slide__text">{t("Main.Text")} </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
