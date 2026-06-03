import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './data/translations/en.json';
import es from './data/translations/es.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith('es') ? 'es' : 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
