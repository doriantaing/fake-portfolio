import * as WebFont from "webfontloader";

export const loadFonts = WebFont.load({
  google: {
    families: ['Red Hat Display:400,900', 'Questrial']
  }
});

export const Fonts = {
  redHat: 'Red Hat Display, Helvetica, sans-serif',
  questrial: 'Questrial, Helvetica, sans-serif'
};
