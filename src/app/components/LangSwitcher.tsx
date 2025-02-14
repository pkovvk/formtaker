import "./css/LangSwitcher.css";
import { Locales, LanguageData } from "@/app/interfaces/Locales";

export default function LangSwitcher({
  locales,
  lang,
  setLang,
}: {
  locales: Locales;
  lang: LanguageData;
  setLang: React.Dispatch<React.SetStateAction<LanguageData>>;
}) {
  const changeLang = (language: string) => {
    const newLang = language === 'ru' ? locales.lang.ru : locales.lang.en;
    setLang(newLang);
  };

  return (
    <div className="lang-switcher">
      <button className={lang === locales.lang.ru ? "active" : ""} onClick={() => changeLang('ru')}>RU</button>
      <button className={lang === locales.lang.en ? "active" : ""} onClick={() => changeLang('en')}>EN</button>
    </div>
  );
}
