import { Colors } from '../../../themes/Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors): TokenSettings[] => {
  return [...buildGeneralSettings(colors)];
};

function buildGeneralSettings({ base }: Colors): TokenSettings[] {
  return [
    {
      scope: ['emphasis'],
      settings: {
        fontStyle: TokenFontStyle.italic
      }
    },
    {
      scope: ['strong'],
      settings: {
        fontStyle: TokenFontStyle.bold
      }
    },
    {
      scope: ['header'],
      settings: {
        foreground: base.purple
      }
    },
    {
      scope: ['source'],
      settings: {
        foreground: base.fg
      }
    }
  ];
}
