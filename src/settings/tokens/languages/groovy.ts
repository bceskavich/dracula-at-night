import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  functions(colors),
  ...typings(colors),
  resets(colors)
];

function functions({ base }: Colors): TokenSettings {
  return {
    name: 'Groovy function definitions',
    scope: ['meta.method.groovy'],
    settings: {
      foreground: base.green
    }
  };
}

function typings({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Groovy storage',
      scope: ['source.groovy storage.type.def'],
      settings: {
        foreground: base.pink
      }
    },
    {
      name: 'Groovy Types',
      scope: ['source.groovy storage.type', 'storage.type.groovy'],
      settings: {
        foreground: base.cyan
      }
    }
  ];
}

function resets({ base }: Colors): TokenSettings {
  return {
    name: 'Groovy foreground resets',
    scope: ['keyword.operator.navigation.groovy'],
    settings: {
      foreground: base.fg
    }
  };
}
