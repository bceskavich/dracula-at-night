import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  types(colors),
  pragmas(colors),
  resets(colors)
];

function types({ base }: Colors): TokenSettings {
  return {
    name: 'Haskell Types',
    scope: ['storage.type.haskell'],
    settings: {
      foreground: base.cyan
    }
  };
}

function pragmas({ misc }: Colors): TokenSettings {
  return {
    name: 'Haskell Pragmas',
    scope: ['meta.preprocessor.haskell'],
    settings: {
      foreground: misc.comment
    }
  };
}

function resets({ base }: Colors): TokenSettings {
  return {
    name: 'Haskell foreground resets',
    scope: [
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx',
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
      'punctuation.separator.list.comma.css',
      'constant.language.empty-list.haskell'
    ],
    settings: {
      foreground: base.fg
    }
  };
}
