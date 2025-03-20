"use client";

import { useEffect, useState } from "react";
import locales from "@/locales/locales.json";
import BackgroundVideo from "@/components/Video";
import Header from "@/components/Header";
import CodeWidget from "@/components/index/CodeWidget";

export default function Home() {
  const [lang, setLang] = useState(locales.lang.ru);

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (language) {
      const newLang = language === "ru" ? locales.lang.ru : locales.lang.en;
      setLang(newLang);
    }
  }, []);

  return (
    <>
      <BackgroundVideo lang={lang} />
      <Header lang={lang} locales={locales} setLang={setLang} />
      <CodeWidget lang={lang} />
    </>
  );
}
