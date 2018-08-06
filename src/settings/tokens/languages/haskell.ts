import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Haskell Types',
    scope: ['storage.type.haskell'],
    settings: {
      foreground: base.cyan
    }
  }
];
