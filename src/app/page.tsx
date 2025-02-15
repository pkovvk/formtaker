"use client";

import { useEffect, useState } from "react";
import locales from "@/app/locales/locales.json";
import BackgroundVideo from "@/app/components/Video";
import Header from "@/app/components/Header";

export default function Home() {
  const [lang, setLang] = useState(locales.lang.ru);

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (language) {
      const newLang = language === "ru" ? locales.lang.ru : locales.lang.en;
      setLang(newLang);
    }
  });

  return (
    <>
      <BackgroundVideo lang={lang} />
      <Header lang={lang} locales={locales} setLang={setLang} />
    </>
  );
}
