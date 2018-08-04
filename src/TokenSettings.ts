import { ANSIColors, BaseColors, MiscColors } from './colorVariables';

export default interface TokenSettings {
  name?: string;
  scope: string[];
  settings: TokenSettingsList;
}

interface TokenSettingsList {
  foreground: TokenForeground;
  fontStyle?: TokenFontStyle;
}

type TokenForeground = BaseColors | ANSIColors | MiscColors;
type TokenFontStyle =
  | 'regular'
  | 'normal'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'underline italic';
