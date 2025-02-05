"use client";

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/background.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className="header">
        <div className="logo-main">
          <Image src="/logo.png" alt="Logo" width={180} height={50} />
        </div>
        <hr />
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link href="/create">Создать форму</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/connect">О проекте</Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleMenu} className="navbar-btn">
          {isNavOpen ? <FaTimes size={40} /> : <FaBars size={40} />}
        </button>
        {isNavOpen && (
          <nav className="navbar-frombtn">
            <ul className="nav-list-frombtn">
              <li>
                <Link href="/create">Создать форму</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/connect">О проекте</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}
