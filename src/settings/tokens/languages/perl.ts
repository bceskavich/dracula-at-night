import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Variables and object properties',
    scope: ['constant.other.key.perl'],
    settings: {
      foreground: base.fg
    }
  }
];
