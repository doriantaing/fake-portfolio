import * as WebFont from "webfontloader";

// COLORS
const colors = {
  black: '#1F1F1F',
  grey: '#9294A0',
  red: '#D74850',
  blue: '#1A73E8'
};

// FONTS
export const loadFonts = WebFont.load({
  google: {
    families: ['Red Hat Display:400,900', 'Questrial']
  }
});

const fonts = {
  redHat: 'Red Hat Display, Helvetica, sans-serif',
  questrial: 'Questrial, Helvetica, sans-serif'
};


export const theme = {
  colors,
  fonts
};
