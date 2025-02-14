import "./css/Video.css";
import { useEffect, useRef } from "react";
import { LanguageData } from "@/app/interfaces/Locales";

export default function Video({ lang }: { lang: LanguageData }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    >
      <source src="/background.mp4" type="video/mp4" />
      {lang.novid}
    </video>
  );
}
