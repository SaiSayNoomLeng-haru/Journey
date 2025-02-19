import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content: {
    files: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], extract
  },
  theme: {
    screens, fontSize,
    extend: {
     colors: {
      accent: {
        DEFAULT: '#D0D6F9'
      },
      'brand-white': '#ffffff',
      'brand-dark': '#0b0d17'
     },
     fontFamily: {
      barlow: ['var(--font-barlow)'],
      condensed: ['var(--font-condensed)'],
      belleFair: ['var(--font-belleFair)'],
     },
     fontSize: {
      'fs-900' : '9rem',
      'fs-800' : '6.25rem',
      'fs-700' : '3.5rem',
      'fs-600' : '2rem',
      'fs-500' : '1.75rem',
      'fs-400' : '1.125rem',
      'fs-300' : '1rem',
      'fs-200' : '0.875rem',
     }, screens: {
      'sm' : '30rem',
      'md' : '35rem',
      'lg' : '45rem'
     }
    },
  },
  plugins: [
    fluid
  ],
} satisfies Config;
