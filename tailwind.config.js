const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    corePlugins: {
      container: false
    },
    theme: {
        extend: {},
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1440px'
            // => @media (min-width: 1280px) { ... }
        },
        fontSize: {
            '2xs': '.5rem', // 8px
            '1xs': '.625rem', // 10px
            xs: '.75rem', // 12px
            sm: '.875rem', // 14px
            base: '1rem', // 16px
            md: '1.125rem', // 18px
            lg: '1.25rem', // 20px
            xl: '1.38rem', // 22px
            '1xl': '1.5rem', // 26px
            '2xl': '1.775rem', // 28px
            '3xl': '2rem', // 32px
            '4xl': '2.25rem', // 36px
            '5xl': '2.5rem', // 42px
            50: '3.5rem', // 50px
            '6xl': '3.75rem', // 60px
            '7xl': '4.5rem', // 72px
            '8xl': '5rem', // 80px
            '10xl': '6.25rem' // 100px
        },
        zIndex: {
            0: 0,
            10: 10,
            20: 20,
            25: 25,
            30: 30,
            40: 40,
            50: 50,
            75: 75,
            100: 100,
            auto: 'auto',
            1000: '1000'
        },
        colors: {
          ...colors,
          // primary: 'rgb(0, 0, 255)'
          primary: colors.indigo['600']
        }
    },
    variants: {
        display: ['responsive', 'hover'],
        borderWidth: ['responsive', 'hover']
    },
    plugins: []
}
