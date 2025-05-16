// i18nServer.ts
import i18next from 'i18next';

import exampleTranslationsEnglish from './src/locales/en/exampleUsage.json';

const initServerI18n = async () => {
  const instance = i18next.createInstance();

  await instance.init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        example: exampleTranslationsEnglish,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return instance;
};

export default initServerI18n;
