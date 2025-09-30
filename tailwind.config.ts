import type { Config } from "tailwindcss";
import relumeConfig from "@relume_io/relume-tailwind";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [relumeConfig],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Fresh Garden Design System Colors
        'hunter-green': '#172815',
        'woodland': '#3e5622',
        'neutral-darkest': '#000000',

        // Color Scheme 1
        'scheme-1': {
          bg: '#31441b',
          fg: '#3e5622',
          text: '#ffffff',
          border: '#ffffff33',
        },

        // Color Scheme 2
        'scheme-2': {
          bg: '#172815',
          fg: '#122010',
          text: '#ffffff',
          border: '#ffffff33',
        },
      },

      fontFamily: {
        'heading': ['var(--font-heading)', 'serif'],
        'body': ['var(--font-body)', 'monospace'],
      },

      fontSize: {
        'h1': ['56px', { lineHeight: '1.2', letterSpacing: '-0.56px' }],
        'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.48px' }],
        'h3': ['40px', { lineHeight: '1.2', letterSpacing: '-0.4px' }],
        'text-lg': ['18px', { lineHeight: '1.5' }],
        'text-base': ['16px', { lineHeight: '1.5' }],
        'text-sm': ['14px', { lineHeight: '1.5' }],
      },

      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
      },

      spacing: {
        'padding-global': '4rem', // 64px
        'padding-section-lg': '7rem', // 112px
        'padding-section-md': '5rem', // 80px
        '64': '4rem',
        '80': '5rem',
        '112': '7rem',
      },

      borderRadius: {
        'lg': '40px',
        'md': '32px',
        'sm': '12px',
      },

      maxWidth: {
        'container': '1280px',
        'content-lg': '768px',
        'content-md': '560px',
        'content-sm': '400px',
      },

      borderWidth: {
        'divider': '1px',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;