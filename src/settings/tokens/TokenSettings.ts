export default interface TokenSettings {
  name?: string;
  scope: string[];
  settings: TokenSettingsList;
}

interface TokenSettingsList {
  foreground?: string;
  fontStyle?: TokenFontStyle;
}

export enum TokenFontStyle {
  regular = 'regular',
  normal = 'normal',
  bold = 'bold',
  italic = 'italic',
  underline = 'underline',
  ui = 'underline italic'
}
