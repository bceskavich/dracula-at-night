import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  instanceKeywords(colors),
  ...functions(colors)
];

function instanceKeywords({ base }: Colors): TokenSettings {
  return {
    name: 'PHP instance keywords',
    scope: ['variable.language punctuation.definition.variable.php'],
    settings: { foreground: base.purple }
  };
}

function functions({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'PHP function parameters',
      scope: ['meta.function.arguments variable.other.php'],
      settings: {
        foreground: base.green
      }
    },
    {
      name: 'PHP function invocation',
      scope: ['meta.function-call.php'],
      settings: {
        foreground: base.cyan
      }
    }
  ];
}
