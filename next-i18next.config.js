module.exports = {
  i18n: {
    defaultLocale: 'tr',
    locales: ['en', 'tr'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
