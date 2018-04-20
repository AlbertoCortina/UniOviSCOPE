import I18n from 'react-native-i18n';
import es from './locales/es';
import en from './locales/en';

I18n.fallbacks = true;

I18n.translations = {
  es,
  en
};

export default I18n;