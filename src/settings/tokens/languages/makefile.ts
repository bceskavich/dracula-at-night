import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Makefile interpolation punctuation',
    scope: ['punctuation.definition.variable.makefile'],
    settings: {
      foreground: base.pink
    }
  }
];
