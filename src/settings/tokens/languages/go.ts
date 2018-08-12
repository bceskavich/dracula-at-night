import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Go Types',
    scope: ['source.go storage.type'],
    settings: {
      foreground: base.cyan
    }
  }
];
