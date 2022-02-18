import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLoca from './en';
import zhLoca from './zh-CN';
import store from '../store';
const lang = store.getState().language;
i18n.use(initReactI18next).init({
    resources:{
        en:{
            translation:enLoca
        },
        'zh-CN':{
            translation:zhLoca
        }
    },
    lng:lang,
    fallbackLng:lang,
    interpolation:{
        escapeValue:false,
    }
});
export default i18n;