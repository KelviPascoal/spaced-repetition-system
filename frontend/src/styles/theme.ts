export const theme = {
    grid: {
        container: '130rem',
        gutter: '3.2rem'
    },
    border: {
        radius: '0.4rem'
    },
    font: {
        family:
            "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        light: 300,
        normal: 400,
        bold: 600,
        sizes: {
            xsmall: '1.2rem',
            small: '1.4rem',
            medium: '1.6rem',
            large: '1.8rem',
            xlarge: '2.0rem',
            xxlarge: '2.8rem',
            huge: '5.2rem'
        }
    },
    colors: {
        brand: {
            primary: '#9701ef',
            secondary: '#3CD3C1',
        },
        background: {
            base: '#ffffff',       // fundo da página
            surface: '#F2F2F2',    // áreas internas (cards, painéis)
            muted: '#f0f6fb',      // fundos mais discretos
        },
        text: {
            primary: '#11111d',    // quase preto
            secondary: '#8F8F8F',  // cinza
            inverted: '#FAFAFA',   // texto sobre fundos escuros
        },
        border: {
            light: '#f0f6fb',
            default: '#8F8F8F',
            dark: '#2E2F42',
        },
        feedback: {
            danger: '#FF6347',
        },
        neutral: {
            white: '#FAFAFA',
            black: '#11111d',
            gray: '#8F8F8F',
            darkGray: '#2E2F42',
        },
        cards: {
            blue: '#386cf7',
            green: '#00c67e',
            yellow: '#ff9b00',
            red: '#ff0040',
            purple: '#a300f8',
            lightBlue: '#00b9d5',
            orange: '#fe6203',
            lightGreen: '#46dc00',
        },
    },

    spacings: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50
    },
    transition: {
        default: '0.3s ease-in-out',
        fast: '0.1s ease-in-out'
    }
}