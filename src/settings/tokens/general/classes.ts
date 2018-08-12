import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  classDefinitions(colors),
  instanceKeywords(colors),
  inheritedClasses(colors),
  builtinClasses(colors)
];

function classDefinitions({ base }: Colors): TokenSettings {
  return {
    name: 'Class definitions',
    scope: ['entity.name.type.class'],
    settings: {
      foreground: base.green
    }
  };
}

function instanceKeywords({ base }: Colors): TokenSettings {
  return {
    name: 'Instance keywords (this, super, self, etc.)',
    scope: [
      'keyword.other.this',
      'variable.language',
      'variable.parameter.function.language.special'
    ],
    settings: {
      foreground: base.purple
    }
  };
}

function inheritedClasses({ base }: Colors): TokenSettings {
  return {
    name: 'Inherited classes',
    scope: ['entity.other.inherited-class'],
    settings: {
      foreground: base.cyan
    }
  };
}

function builtinClasses({ base }: Colors): TokenSettings {
  return {
    name: 'Built-in classes',
    scope: ['support.class.builtin'],
    settings: {
      foreground: base.green
    }
  };
}
