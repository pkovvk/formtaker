import "./css/CodeWidget.css";
import { LanguageData } from "@/interfaces/Locales";
import { useState, useRef, useEffect } from "react";
import { FaAngleRight, FaAngleDoubleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
1;

export default function CodeWidget({ lang }: { lang: LanguageData }) {
  const [isCodeInputVisible, setIsCodeInputVisible] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const [code, setCode] = useState<string | null>(null);

  const changeCodeInputVisible = (value: boolean) => {
    setIsCodeInputVisible(value);
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    setCode((prevCode) => (prevCode !== null ? prevCode + value : value));
  };

  useEffect(() => {
    if (isCodeInputVisible && inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, [isCodeInputVisible]);

  useEffect(() => {
    if (code?.length === 6) {
      router.replace(`/${code}`)
    }
  }, [code]);

  return (
    <div className="code-widget">
      <h1>{lang.index.codeWidget.title}</h1>
      {!isCodeInputVisible ? (
        <>
          <p>{lang.index.codeWidget.description}</p>
          <button className="btn" onClick={() => changeCodeInputVisible(true)}>
            {lang.index.codeWidget.btn}
            <FaAngleRight size={20} />
          </button>
        </>
      ) : (
        <>
          <p>
            <FaAngleDoubleDown />
            {lang.index.codeWidget.inputTitle}
            <FaAngleDoubleDown />
          </p>
          <div className="code-input">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  onChange={(event) => handleInputChange(index, event)}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
