import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  instanceKeywords(colors),
  ...functions(colors),
  interpolation(colors),
  types(colors)
];

function instanceKeywords({ base }: Colors): TokenSettings {
  return {
    name: 'PHP instance keywords',
    scope: ['variable.language punctuation.definition.variable.php'],
    settings: { foreground: base.purple, fontStyle: TokenFontStyle.italic }
  };
}

function functions({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'PHP function parameters',
      scope: ['meta.function.arguments variable.other.php'],
      settings: {
        foreground: base.orange,
        fontStyle: TokenFontStyle.italic
      }
    },
    {
      name: 'PHP function invocation',
      scope: ['meta.function-call.php'],
      settings: {
        foreground: base.green
      }
    }
  ];
}

function interpolation({ base }: Colors): TokenSettings {
  return {
    name: 'PHP interpolation operators',
    scope: ['punctuation.section.embedded.end source.php'],
    settings: {
      foreground: base.pink
    }
  };
}

function types({ base }: Colors): TokenSettings {
  return {
    name: 'PHP Types',
    scope: ['storage.type.php'],
    settings: {
      foreground: base.cyan
    }
  };
}
