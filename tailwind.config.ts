import { blue, gray, orange, pink, purple, red, teal, yellow } from 'tailwindcss/colors'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        notion: {
          gray: { DEFAULT: gray[400], muted: gray[800] },
          brown: {
            DEFAULT: yellow[700],
            muted: yellow[800]
          },
          orange: {
            DEFAULT: orange[500],
            muted: orange[800]
          },
          yellow: {
            DEFAULT: yellow[600],
            muted: yellow[800]
          },
          teal: {
            DEFAULT: teal[500],
            muted: teal[800]
          },
          blue: {
            DEFAULT: blue[500],
            muted: blue[800]
          },
          purple: {
            DEFAULT: purple[500],
            muted: purple[800]
          },
          pink: {
            DEFAULT: pink[500],
            muted: pink[800]
          },
          red: {
            DEFAULT: red[500],
            muted: red[800]
          }
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography'),],
}

export default config