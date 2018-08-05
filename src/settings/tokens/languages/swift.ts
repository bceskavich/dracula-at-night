import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  instanceKeywords(colors),
  separators(colors)
];

function instanceKeywords({ base }: Colors): TokenSettings {
  return {
    name: 'Swift instance keywords',
    scope: ['keyword.expressions-and-types.swift'],
    settings: { foreground: base.purple }
  };
}

function separators({ base }: Colors): TokenSettings {
  return {
    name: 'Swift separators',
    scope: ['punctuation.function.swift'],
    settings: {
      foreground: base.pink
    }
  };
}
