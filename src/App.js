import { useTranslation } from "react-i18next";
import "./app.css";
import Second from "./test";

const App = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "German" },
  ];
  const getCurrentLanguageName = () => {
    const currentLanguage = languages.find(lang => lang.code === i18n.language);
    return currentLanguage ? currentLanguage.name : "Unknown Language";
  };

  return (
    <div>
      <h1>
        {t("welcome")} Glorious {t("news")}
      </h1>
      <h1>
        {t("hog eats potatoes")}
      </h1>
      <Second />
      <div className="lang_section">
        <h3>{getCurrentLanguageName()}</h3>
        <div className="lang_buttons">
          {languages.map((language) => (
            <button
              onClick={() => i18n.changeLanguage(language.code)}
              key={language.code}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
