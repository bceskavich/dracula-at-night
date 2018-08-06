import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

import classes from './classes';
import comments from './comments';
import constants from './constants';
import functions from './functions';
import keywords from './keywords';
import punctuation from './punctuation';

export default (colors): TokenSettings[] => [
  ...buildGeneralSettings(colors),
  ...classes(colors),
  ...comments(colors),
  ...constants(colors),
  ...functions(colors),
  ...keywords(colors),
  ...punctuation(colors)
];

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
