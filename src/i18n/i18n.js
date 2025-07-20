import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en.json';
import translationRu from './locales/ru.json';
import translationUz from './locales/uz.json';

const resources = {
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  },
  uz: {
    translation: translationUz
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz', 
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false 
    }
  });

export default i18n;