import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Strings',
    scope: ['string'],
    settings: {
      foreground: base.yellow
    }
  }
];
