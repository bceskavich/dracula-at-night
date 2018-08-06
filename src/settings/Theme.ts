import TokenSettings from '../settings/tokens/TokenSettings';

export interface Theme {
  // Metadata
  name: string;
  author: string;
  maintainers: string[];
  semanticClass: string;

  colorVars: Colors;
  colors: object;
  tokenColors: TokenSettings[];
}

export interface Colors {
  base: BaseColors;
  ansi: ANSIColors;
  misc: MiscColors;
}

// Base colors
export interface BaseColors {
  bg: string;
  fg: string;
  selection: string;
  cyan: string;
  green: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  yellow: string;
}

// ANSI colors
export interface ANSIColors {
  color0: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color13: string;
  color14: string;
  color15: string;
}

// Other colors
export interface MiscColors {
  quotes: string;
  propertyQuotes: string;
  comment: string;
  lineHighlight: string;
  nonText: string;
  white: string;
  tabDropBg: string;
  bgLighter: string;
  bgLight: string;
  bgDark: string;
  bgDarker: string;
  purpleDarker: string;
}
