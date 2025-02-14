export interface LanguageData {
    novid: string;
    index: {
      header: {
        createForm: string;
        about: string;
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
  