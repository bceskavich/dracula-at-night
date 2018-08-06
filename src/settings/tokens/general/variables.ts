import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  variables(colors),
  ...destructuring(colors)
];

function variables({ base }: Colors): TokenSettings {
  return {
    name: 'Variables and object properties',
    scope: ['variable', 'support.variable.property'],
    settings: {
      foreground: base.fg
    }
  };
}

function destructuring({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Destructuring value for alias',
      scope: [
        'meta.import variable.other.readwrite',
        'meta.object-binding-pattern-variable variable.object.property'
      ],
      settings: {
        foreground: base.orange
      }
    },
    {
      name: 'Destructuring value alias',
      scope: ['meta.import variable.other.readwrite.alias'],
      settings: {
        foreground: base.fg
      }
    }
  ];
}
