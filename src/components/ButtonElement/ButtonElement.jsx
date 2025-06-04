import "./ButtonElement.css";
import Icon from "../../../img/MainImage/icon.svg";

export default function ButtonElement({ text, icon, style, ...props }) {
  return (
    <>
      {" "}
      <button style={style} className="header__button" {...props}>
        {icon && (
          <img
            src={Icon}
            alt="icon"
            className="button-icon"
            style={{ maxWidth: 14, marginRight: 7 }}
          />
        )}
        {text}
      </button>
    </>
  );
}
