import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'CoffeeScript interpolation punctuation',
    scope: ['punctuation.section.embedded.coffee'],
    settings: {
      foreground: base.pink
    }
  }
];
