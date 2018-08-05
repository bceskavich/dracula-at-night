import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'TOML separators',
    scope: ['meta.group.double.toml', 'meta.group.toml'],
    settings: {
      foreground: base.pink
    }
  }
];
