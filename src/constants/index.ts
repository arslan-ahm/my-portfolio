// Media queries
export const MEDIA_QUERIES = {
  desktop: '(max-width: 2080px)',
  laptop: '(max-width: 1680px)',
  tablet: '(max-width: 1040px)',
  mobile: '(max-width: 696px)',
  mobileLS: '(max-height: 696px)',
  mobileS: '(max-width: 400px)',
  useMotion: '(prefers-reduced-motion: no-preference)',
  reduceMotion: '(prefers-reduced-motion: reduce)',
  touch: '(pointer: coarse)',
  noTouch: '(pointer: fine)',
} as const;

// Theme constants
export const THEMES = {
  light: 'light',
  dark: 'dark',
} as const;

// Animation durations
export const DURATIONS = {
  XS: 200,
  S: 300,
  M: 400,
  L: 600,
  XL: 800,
} as const;

// Spacing constants
export const SPACING = {
  outer: '24px',
  'space-2xl': '64px',
} as const;

// Font stacks
export const FONTS = {
  primary: [
    'Gotham',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ].join(', '),
  mono: [
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ].join(', '),
} as const;

export type Theme = keyof typeof THEMES;