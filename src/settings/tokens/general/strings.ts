import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Strings',
    scope: [
      'string',

      'punctuation.definition.string.begin',
      'punctuation.definition.string.end'
    ],
    settings: {
      foreground: base.yellow
    }
  },
  {
    name: 'String Key Property (For JSON Keys)',
    scope: [
      'support.type.property-name',
      'punctuation.support.type.property-name.begin',
      'punctuation.support.type.property-name.end'
    ],
    settings: {
      foreground: base.cyan
    }
  }
];
