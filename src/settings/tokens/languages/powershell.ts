import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Powershell punctuation bounds',
    scope: [
      'keyword.operator.other.powershell',
      'keyword.other.statement-separator.powershell'
    ],
    settings: {
      foreground: base.fg
    }
  }
];
