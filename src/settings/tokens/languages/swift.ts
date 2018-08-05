import { Colors } from '../../../themes/Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Swift instance keywords',
    scope: ['keyword.expressions-and-types.swift'],
    settings: { foreground: base.purple }
  }
];
