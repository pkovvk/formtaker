export interface LanguageData {
  novid: string;
  header: {
    createForm: string;
    about: string;
  };
  index: {
    codeWidget: {
      title: string;
      description: string;
      btn: string;
      inputTitle: string;
    };
  };
}

export interface Lang {
  ru: LanguageData;
  en: LanguageData;
}

export interface Locales {
  lang: Lang;
}
