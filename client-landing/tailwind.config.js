module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.tsx', './components/**/*.tsx']
  },
  theme: {
    extend: {
      colors: {
        'primary-1-tint': 'var(--primary-1-tint)',
        'primary-2-tint': 'var(--primary-2-tint)',
        'primary-2-shade': 'var(--primary-2-shade)',
        'primary-3-turq': 'var(--primary-3-turq)',
        'primary-3': 'var(--primary-3)',
        'primary-3-shade': 'var(--primary-3-shade)',
        'primary-3-tint-50': 'rgba(162, 199, 204, 0.5)',
        'accent-shade': 'var(--accent-shade)',
        error: 'var(--error)'
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
      },
      transformOrigin: {
        '0': '0%',
        zIndex: {
          '-1': '-1'
        }
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within']
  },
  plugins: []
};
