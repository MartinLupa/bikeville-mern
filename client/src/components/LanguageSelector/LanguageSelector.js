import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

export const LanguageSelector = () => {
  const { i18n } = useTranslation(["navbar"]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      className="language-selector-container"
      name=""
      id=""
      onChange={handleLanguageChange}
      value={localStorage.getItem("i18nextLng")}
    >
      <option value="en">ENG</option>
      <option value="sp">SPA</option>
      <option value="de">GER</option>
    </select>
  );
};
