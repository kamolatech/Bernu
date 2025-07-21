import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = ({ onChangeLanguage }) => {
  const [selectedLang, setSelectedLang] = useState("РУ");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  const languages = useMemo(
    () => [
      { code: "Uz", name: "Uzbek" },
      { code: "РУ", name: "Russian" },
      { code: "En", name: "English" },
    ],
    []
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectLanguage = (langCode) => {
    setSelectedLang(langCode);
    i18n.changeLanguage(langCode.toLowerCase());
    localStorage.setItem("selectedLanguage", langCode);
    setIsOpen(false);
    onChangeLanguage(langCode.toLowerCase());
  };

  const selectedLanguage = useMemo(
    () => languages.find((lang) => lang.code === selectedLang) || languages[0],
    [selectedLang, languages]
  );

  return (
    <div className="relative inline-block z-10 text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-dark px-3 py-2 border-blue border-b-[1px]"
      >
        <span className="font-medium">{selectedLanguage.code}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-20 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm hover:bg-blue"
            >
              <span>{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
