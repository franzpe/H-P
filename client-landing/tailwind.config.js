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
        'primary-2-navy': 'var(--primary-2-navy)',
        'primary-2-shade': 'var(--primary-2-shade)',
        'primary-3-turq': 'var(--primary-3-turq)',
        'primary-3': 'var(--primary-3)',
        'primary-3-shade': 'var(--primary-3-shade)',
        'primary-3-tint-50': 'rgba(162, 199, 204, 0.5)',
        'accent-orange': 'var(--accent-orange)',
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
      fontSize: {
        '7xl': '5rem'
      },
      borderWidth: {
        '1.5': '1.5px'
      },
      boxShadow: {
        header: '0 4px 20px 0 rgba(41, 41, 41, 0.07)',
        card: '0 1px 10px 0 rgba(203, 203, 203, 0.3)'
      },
      transformOrigin: {
        '0': '0%',
        zIndex: {
          '-1': '-1'
        }
      },
      minHeight: {
        auto: 'auto'
      },
      height: {
        '12': '3rem',
        '14': '3.5rem'
      },
      width: {
        '1px': '1px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem'
      },
      lineHeight: {
        'very-tight': '1.15'
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within']
  },
  plugins: []
};
