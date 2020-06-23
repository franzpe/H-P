module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.tsx', './components/**/*.tsx']
  },
  theme: {
    extend: {
      colors: {
        'primary-2-tint': '#797a92',
        'primary-2-shade': '#00034f',
        'primary-3-turq': '#39bacd',
        'primary-3-shade': '#199fb2'
      },
      fontFamily: {
        avenir: [
          'Avenir',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Noto Sans',
          'sans-serif'
        ],
        helvetica: [
          'Helvetica',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Noto Sans',
          'sans-serif'
        ]
      },
      boxShadow: {
        header: '0 4px 20px 0 rgba(41, 41, 41, 0.07)'
      }
    }
  },
  variants: {},
  plugins: []
};
