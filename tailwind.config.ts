import type { Config } from "tailwindcss";

import tailwindAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["class"],
  plugins: [tailwindAnimate],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      borderWidth: {
        "3": "3px",
      },
      colors: {
        accent: {
          DEFAULT: "var(--shad-accent)",
          foreground: "var(--shad-accent-foreground)",
        },
        background: "var(--shad-background)",
        bittersweet: {
          "50": "#fff3f1",
          "100": "#ffe4e1",
          "200": "#ffcdc7",
          "300": "#ffaba0",
          "400": "#ff8272",
          "500": "#f8503b",
          "600": "#e5341d",
          "700": "#c12814",
          "800": "#a02414",
          "900": "#842418",
          "950": "#480e07",
        },
        border: "var(--shad-border)",
        boulder: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#757575",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#262626",
        },
        card: {
          DEFAULT: "var(--shad-card)",
          foreground: "var(--shad-card-foreground)",
        },
        destructive: {
          DEFAULT: "var(--shad-destructive)",
          foreground: "var(--shad-destructive-foreground)",
        },
        foreground: "var(--shad-foreground)",
        input: "var(--shad-input)",
        koromiko: {
          "50": "#fef9ee",
          "100": "#fdf1d7",
          "200": "#fadeae",
          "300": "#f5c06e",
          "400": "#f1a346",
          "500": "#ed8922",
          "600": "#df6f17",
          "700": "#b95515",
          "800": "#934419",
          "900": "#773917",
          "950": "#401b0a",
        },
        muted: {
          DEFAULT: "var(--shad-muted)",
          foreground: "var(--shad-muted-foreground)",
        },
        popover: {
          DEFAULT: "var(--shad-popover)",
          foreground: "var(--shad-popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--shad-primary)",
          foreground: "var(--shad-primary-foreground)",
        },
        ring: "var(--shad-ring)",
        scooter: {
          "50": "#f0fbfb",
          "100": "#d8f3f5",
          "200": "#b5e7ec",
          "300": "#83d4dd",
          "400": "#54bdcb",
          "500": "#2d9cad",
          "600": "#287f92",
          "700": "#276777",
          "800": "#275663",
          "900": "#254854",
          "950": "#132f39",
        },

        secondary: {
          DEFAULT: "var(--shad-secondary)",
          foreground: "var(--shad-secondary-foreground)",
        },
        "tip-party-pink": {
          "50": "#fef1f6",
          "100": "#fee5ef",
          "200": "#ffcbe2",
          "300": "#ffa1c8",
          "400": "#ff72a8",
          "500": "#fa3a7e",
          "600": "#ea1858",
          "700": "#cc0a40",
          "800": "#a80c35",
          "900": "#8c0f2f",
          "950": "#560117",
        },
      },
      fontFamily: {
        "varela-round": ["var(--font-varela-round)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
} satisfies Config;

export default config;
