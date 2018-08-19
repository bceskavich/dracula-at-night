import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Strings',
    scope: [
      'string',

      // For some reason, quotation marks surrounding strings will not be styled
      // yellow when the string is used as a function parameter or object property
      // in some languages. So, we force the styling explicitly!
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      'punctuation.support.type.property-name.begin',
      'punctuation.support.type.property-name.end'
    ],
    settings: {
      foreground: base.yellow
    }
  }
];
