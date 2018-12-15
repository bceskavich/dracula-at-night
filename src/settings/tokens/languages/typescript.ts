import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  prototypeProperty(colors),
  constants(colors),
  specialLanguageClasses(colors),
  classesInUse(colors),
  ...functions(colors),
  ...typings(colors)
];

function prototypeProperty({ base }: Colors): TokenSettings {
  return {
    name: 'TypeScript prototype prop',
    scope: ['support.variable.property.ts'],
    settings: { foreground: base.purple }
  };
}

function constants({ base }: Colors): TokenSettings {
  return {
    name: 'TypeScript constant definitions',
    scope: ['variable.other.constant.ts'],
    settings: {
      foreground: base.cyan
    }
  };
}

function specialLanguageClasses({ base }: Colors): TokenSettings {
  return {
    name: 'TypeScript language classes',
    scope: [
      'support.class.console.ts',
      'support.type.object.module.ts',
      'support.class.promise.ts',
      'support.constant.json.ts'
    ],
    settings: {
      foreground: base.green
    }
  };
}

function functions({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'TS function definitions',
      scope: [
        'meta.object-literal.key.ts entity.name.function.ts',
        'meta.var.expr.ts meta.definition.variable.ts entity.name.function.ts'
      ],
      settings: {
        foreground: base.green
      }
    },
    {
      name: 'TS function invocation',
      scope: ['meta.function-call.ts'],
      settings: {
        foreground: base.cyan
      }
    }
  ];
}

function classesInUse({ base }: Colors): TokenSettings {
  return {
    name: 'TypeScript classes in use',
    scope: ['support.class.ts'],
    settings: {
      foreground: base.green
    }
  };
}

function typings({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'TS Typing Definitions',
      scope: [
        'entity.name.type.alias.ts',
        'entity.name.type.interface.ts',
        'entity.name.type.enum.ts'
      ],
      settings: {
        foreground: base.green
      }
    },
    {
      name: 'TS Typing Uses',
      scope: [
        'support.type.primitive.ts',
        'support.type.builtin.ts',
        'entity.name.type.ts'
      ],
      settings: {
        foreground: base.cyan
      }
    },
    {
      name: 'TS Generics / Type Parameters',
      scope: [
        'meta.type.parameters.ts support.type.primitive.ts',
        'meta.type.parameters.ts entity.name.type.ts'
      ],
      settings: {
        foreground: base.orange
      }
    },
    {
      name: 'TS Generics Punctuation',
      scope: [
        'punctuation.definition.typeparameters.begin.ts',
        'punctuation.definition.typeparameters.end.ts'
      ],
      settings: {
        foreground: base.pink
      }
    }
  ];
}
