import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  functions(colors),
  constants(colors),
  ...modules(colors),
  ...punctuation(colors)
];

function functions({ base }: Colors): TokenSettings {
  return {
    name: 'Elixir function definitions',
    scope: ['entity.name.function.elixir'],
    settings: { foreground: base.green }
  };
}

function constants({ base }: Colors): TokenSettings {
  return {
    name: 'Elixir atoms',
    scope: ['constant.other.symbol.elixir'],
    settings: { foreground: base.cyan }
  };
}

function modules({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Elixir module definitions',
      scope: ['entity.name.type.module.elixir'],
      settings: { foreground: base.green }
    },
    {
      name: 'Elixir module variables',
      scope: [
        'variable.other.readwrite.module.elixir',
        'variable.other.readwrite.module.elixir punctuation.definition.variable.elixir'
      ],
      settings: {
        foreground: base.orange
      }
    }
  ];
}

function punctuation({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Elixir separators',
      scope: ['punctuation.separator.method.elixir'],
      settings: {
        foreground: base.pink
      }
    },
    {
      name: 'Elixir interpolation',
      scope: ['punctuation.section.embedded.elixir'],
      settings: {
        foreground: base.pink
      }
    }
  ];
}
