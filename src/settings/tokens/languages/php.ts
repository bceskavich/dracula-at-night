import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'PHP instance keywords',
    scope: ['variable.language punctuation.definition.variable.php'],
    settings: { foreground: base.purple }
  }
];
