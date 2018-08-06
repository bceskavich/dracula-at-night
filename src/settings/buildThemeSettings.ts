import { ANSIColors, BaseColors, MiscColors } from './Theme';
import tokens from './tokens';
import TokenSettings from './tokens/TokenSettings';

export default function buildTheme(
  base: BaseColors,
  ansi: ANSIColors,
  misc: MiscColors
): { colors: object; tokenColors: TokenSettings[] } {
  return {
    colors: buildColorSettings(),
    tokenColors: buildTokenSettings(base, ansi, misc)
  };
}

function buildColorSettings() {
  return {};
}

function buildTokenSettings(base, ansi, misc): TokenSettings[] {
  return tokens({ base, ansi, misc });
}
