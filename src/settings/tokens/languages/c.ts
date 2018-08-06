import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'C Types',
    scope: ['storage.type.c'],
    settings: {
      foreground: base.cyan
    }
  }
];
