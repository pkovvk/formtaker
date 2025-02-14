import "./css/Header.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LanguageData, Locales } from "@/app/interfaces/Locales";
import LangSwitcher from "./LangSwitcher";

export default function Header({
  lang,
  locales,
  setLang,
}: {
  lang: LanguageData;
  locales: Locales;
  setLang: React.Dispatch<React.SetStateAction<LanguageData>>;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header">
      <div className="logo-main">
        <Image src="/logo.png" alt="Logo" width={180} height={50} />
      </div>
      <hr />
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link href="/create">{lang.index.header.createForm}</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/connect">{lang.index.header.about}</Link>
          </li>
        </ul>
        <LangSwitcher locales={locales} lang={lang} setLang={setLang} />
      </nav>
      <button onClick={toggleMenu} className="navbar-btn">
        {isNavOpen ? <FaTimes size={40} /> : <FaBars size={40} />}
      </button>
      {isNavOpen && (
        <>
          <nav className="navbar-frombtn">
            <ul className="nav-list-frombtn">
              <li>
                <Link href="/create">{lang.index.header.createForm}</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/connect">{lang.index.header.about}</Link>
              </li>
              <li>
                <LangSwitcher locales={locales} lang={lang} setLang={setLang} />
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
