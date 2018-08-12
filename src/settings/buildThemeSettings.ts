import colors from './colors';
import { ANSIColors, BaseColors, MiscColors } from './Theme';
import tokens from './tokens';
import TokenSettings from './tokens/TokenSettings';

export default function buildTheme(
  base: BaseColors,
  ansi: ANSIColors,
  misc: MiscColors
): { colors: object; tokenColors: TokenSettings[] } {
  return {
    colors: colors({ base, ansi, misc }),
    tokenColors: tokens({ base, ansi, misc })
  };
}
