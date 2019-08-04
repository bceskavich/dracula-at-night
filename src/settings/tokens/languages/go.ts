import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  ...typings(colors),
  ...functions(colors)
];

function typings({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Go Types',
      scope: ['source.go storage.type'],
      settings: {
        foreground: base.cyan
      }
    },
    {
      name: 'Go Types',
      scope: ['entity.name.type.go'],
      settings: { foreground: base.purple }
    }
  ];
}

function functions({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Go function definitions',
      scope: ['entity.name.function.go'],
      settings: { foreground: base.green }
    },
    {
      name: 'Go function invocation',
      scope: ['support.function.go'],
      settings: { foreground: base.cyan }
    }
  ];
}

function punctuation({ base }: Colors): TokenSettings {
  return {
    name: 'Go separators',
    scope: ['punctuation.other.period.go', 'punctuation.other.colon.go'],
    settings: { foreground: base.pink }
  };
}
