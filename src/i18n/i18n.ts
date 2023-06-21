import * as footerEN from '../locales/en/footer.json';
import * as footerPL from '../locales/pl/footer.json';
import * as headerEN from '../locales/en/header.json';
import * as headerPL from '../locales/pl/header.json';
import * as homePageEN from '../locales/en/homePage.json';
import * as homePagePL from '../locales/pl/homePage.json';
import * as registerFormEN from '../locales/en/registerForm.json';
import * as registerFormPL from '../locales/pl/registerForm.json';
import * as loginFormEN from '../locales/en/loginForm.json';
import * as loginFormPL from '../locales/pl/loginForm.json';
import * as offerListPageEN from '../locales/en/offerListPage.json';
import * as offerListPagePL from '../locales/pl/offerListPage.json';
import * as offerPagePL from '../locales/pl/offerPage.json';
import * as offerPageEN from '../locales/en/offerPage.json';
import * as userPagePL from '../locales/pl/userPage.json';
import * as userPageEN from '../locales/en/userPage.json';
import * as createOfferPagePL from '../locales/pl/createOfferPage.json';
import * as createOfferPageEN from '../locales/en/createOfferPage.json';
import * as miscPL from '../locales/pl/misc.json';
import * as miscEN from '../locales/en/misc.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    components: {
      footer: footerEN,
      header: headerEN,
      homePage: homePageEN,
      loginForm: loginFormEN,
      registerForm: registerFormEN,
      offerListPage: offerListPageEN,
      offerPage: offerPageEN,
      userPage: userPageEN,
      createOfferPage: createOfferPageEN,
      misc: miscEN,
    },
  },
  pl: {
    components: {
      footer: footerPL,
      header: headerPL,
      homePage: homePagePL,
      loginForm: loginFormPL,
      registerForm: registerFormPL,
      offerListPage: offerListPagePL,
      offerPage: offerPagePL,
      userPage: userPagePL,
      createOfferPage: createOfferPagePL,
      misc: miscPL,
    },
  },
};

void i18n.use(initReactI18next).init({
  defaultNS: 'components',
  lng: localStorage.getItem('lng') || 'en',
  react: {
    bindI18n: 'languageChanged',
  },
  resources: resources,
});

export { i18n };
