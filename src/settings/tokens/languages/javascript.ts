import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  prototypeProperty(colors),
  constants(colors),
  specialLanguageClasses(colors),
  classesInUse(colors),
  ...functions(colors)
];

function prototypeProperty({ base }: Colors): TokenSettings {
  return {
    name: 'JavaScript prototype prop',
    scope: ['support.variable.property.js'],
    settings: { foreground: base.purple }
  };
}

function constants({ base }: Colors): TokenSettings {
  return {
    name: 'JavaScript constant definitions',
    scope: ['variable.other.constant.js'],
    settings: {
      foreground: base.cyan
    }
  };
}

function specialLanguageClasses({ base }: Colors): TokenSettings {
  return {
    name: 'JavaScript language classes',
    scope: [
      'support.class.console.js',
      'support.type.object.module.js',
      'support.class.promise.js',
      'support.constant.json.js'
    ],
    settings: {
      foreground: base.green
    }
  };
}

function classesInUse({ base }: Colors): TokenSettings {
  return {
    name: 'JavaScript classes in use',
    scope: ['support.class.js'],
    settings: {
      foreground: base.green
    }
  };
}

function functions({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'JS function definitions',
      scope: [
        'meta.object-literal.key.js entity.name.function.js',
        'meta.var.expr.js meta.definition.variable.js entity.name.function.js',
        'meta.definition.property.js entity.name.function.js'
      ],
      settings: {
        foreground: base.green
      }
    },
    {
      name: 'JS function invocation',
      scope: ['meta.function-call.js'],
      settings: {
        foreground: base.cyan
      }
    }
  ];
}
