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
  fr: {
    start: "Commencer",
    skip: "Passer",
  },
  de: {
    start: "Starten",
    skip: "Überspringen",
  },
  it: {
    start: "Iniziare",
    skip: "Salta",
  },
  ru: {
    start: "Начать",
    skip: "Пропустить",
  },
  ja: {
    start: "開始",
    skip: "スキップ",
  },
  ko: {
    start: "시작",
    skip: "건너뛰기",
  },
  zhCN: {
    start: "开始",
    skip: "跳过",
  },
  ar: {
    start: "ابدأ",
    skip: "تخطى",
  },
};

export const getTranslation = (language: keyof Translations, key: string): string => {
  const languageTranslations = translations[language];
  if (!languageTranslations) {
    return key;
  }

  return languageTranslations[key] || key;
};
