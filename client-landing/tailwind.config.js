module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.tsx', './components/**/*.tsx']
  },
  theme: {
    extend: {
      screens: {
        lg: { min: '1025px' }
      },
      colors: {
        black: '#000',
        'primary-1-tint': 'var(--primary-1-tint)',
        'primary-1-tint-lt': 'var(--primary-1-tintlt)',
        'primary-1-light': 'var(--primary-1-light)',
        'primary-1-shade': 'var(--primary-1-shade)',
        'primary-2-tint': 'var(--primary-2-tint)',
        'primary-2-navy': 'var(--primary-2-navy)',
        'primary-2-shade': 'var(--primary-2-shade)',
        'primary-3-turq': 'var(--primary-3-turq)',
        'primary-3': 'var(--primary-3)',
        'primary-3-shade': 'var(--primary-3-shade)',
        'primary-3-tint-50': 'rgba(162, 199, 204, 0.5)',
        'accent-orange': 'var(--accent-orange)',
        'accent-orange-7': 'rgba(255,136,44,0.07)',
        'accent-shade': 'var(--accent-shade)',
        'accent-tint': 'var(--accent-tint)',
        error: 'var(--error)'
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
        'avenir-book': ['Avenir-Book', 'sans-serif'],
        'avenir-light': ['Avenir-Light', 'sans-serif'],
        'avenir-roman': ['Avenir-Roman', 'sans-serif'],
        'avenir-heavy': ['Avenir-heavy', 'sans-serif'],
        'avenir-black': ['Avenir-Black', 'sans-serif'],
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
        '3.5xl': '2.125rem',
        '6xl': '3.75rem',
        '7xl': '5rem'
      },
      borderWidth: {
        '1.5': '1.5px'
      },
      boxShadow: {
        header: '0 4px 20px 0 rgba(41, 41, 41, 0.07)',
        card: '0 1px 10px 0 rgba(203, 203, 203, 0.3)',
        'card-medium': '0 1px 10px 0 rgba(203, 203, 203, 0.5)',
        'card-medium-hov': '0 1px 16px 0 rgba(203, 203, 203, 0.75)'
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
        '9': '2.25rem',
        '14': '3.5rem',
        '60': '15rem',
        '120': '30rem',
        '124': '31rem',
        '136': '34rem',
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '35%': '35%',
        '37%': '37%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%'
      },
      maxWidth: {
        'screen-xxl': '1400px'
      },
      width: {
        '1px': '1px',
        '60': '15rem',
        '68': '17rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '35%': '35%',
        '37%': '37%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '95%': '95%'
      },
      lineHeight: {
        'very-tight': '1.15'
      },
      flex: {
        '0.8': '0.8 0.8 0%',
        '1.1': '1.1 1.1 0%',
        '1.2': '1.2 1.2 0%',
        '1.3': '1.3 1.3 0%',
        '1.4': '1.4 1.4 0%',
        '1.5': '1.5 1.5 0%',
        '2.4': '2.4 2.4 0%',
        '2': '2 2 0%'
      },
      flexShrink: {
        '0.25': 0.25,
        '0.5': 0.5,
        '0.75': 0.75
      },
      padding: {
        '11': '2.75rem'
      },
      margin: {
        '128': '32rem',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '50%': '50%'
      },
      inset: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        '32': '8rem'
      }
    }
  },
  variants: {
    boxShadow: ['hover'],
    borderWidth: ['responsive', 'last', 'hover'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within']
  },
  plugins: []
};

//hover:border-1.5 hover:border-red-500
