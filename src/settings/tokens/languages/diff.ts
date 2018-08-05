import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default ({ base, misc }: Colors): TokenSettings[] => {
  return [
    {
      scope: ['meta.diff', 'meta.diff.header'],
      settings: {
        foreground: misc.comment
      }
    },
    {
      scope: ['markup.inserted'],
      settings: {
        foreground: base.green
      }
    },
    {
      scope: ['markup.deleted'],
      settings: {
        foreground: base.red
      }
    },
    {
      scope: ['markup.changed'],
      settings: {
        foreground: base.orange
      }
    },
    {
      scope: ['invalid'],
      settings: {
        foreground: base.red,
        fontStyle: TokenFontStyle.ui
      }
    },
    {
      scope: ['invalid.deprecated'],
      settings: {
        foreground: base.fg,
        fontStyle: TokenFontStyle.ui
      }
    },
    {
      scope: ['entity.name.filename'],
      settings: {
        foreground: base.yellow
      }
    },
    {
      scope: ['markup.error'],
      settings: {
        foreground: base.red
      }
    }
  ];
};
