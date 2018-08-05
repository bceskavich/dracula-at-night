import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'C# punctuation bounds',
    scope: ['punctuation.definition.tag.cs'],
    settings: {
      foreground: base.fg
    }
  }
];
