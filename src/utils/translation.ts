interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    start: "Start",
    skip: "Skip",
  },
  ptBR: {
    start: "Iniciar",
    skip: "Pular",
  },
  es: {
    start: "Comenzar",
    skip: "Omitir",
  },
};

export const getTranslation = (language: keyof Translations, key: string): string => {
  const languageTranslations = translations[language];
  if (!languageTranslations) {
    return key;
  }

  return languageTranslations[key] || key;
};
