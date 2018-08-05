export default interface TokenSettings {
  name?: string;
  scope: string[];
  settings: TokenSettingsList;
}

interface TokenSettingsList {
  foreground: string;
  fontStyle?: TokenFontStyle;
}

type TokenFontStyle =
  | 'regular'
  | 'normal'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'underline italic';
