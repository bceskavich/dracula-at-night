import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Rust Types',
    scope: ['storage.class.std.rust', 'storage.type.core.rust'],
    settings: {
      foreground: base.cyan
    }
  }
];
