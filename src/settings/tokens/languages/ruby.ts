import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  instanceVariables(colors),
  classVariables(colors),
  classesInUse(colors),
  constants(colors),
  ...functions(colors),
  ...punctuation(colors),
  symbols(colors)
];

function instanceVariables({ base }: Colors): TokenSettings {
  return {
    name: 'Ruby instance variables',
    scope: [
      'variable.other.readwrite.instance.ruby',
      'variable.other.readwrite.instance.ruby punctuation.definition.variable.ruby'
    ],
    settings: {
      foreground: base.orange
    }
  };
}

function classVariables({ base }: Colors): TokenSettings {
  return {
    name: 'Ruby class variables',
    scope: [
      'variable.other.readwrite.class.ruby',
      'variable.other.readwrite.class.ruby punctuation.definition.variable.ruby'
    ],
    settings: {
      foreground: base.cyan
    }
  };
}

function classesInUse({ base }: Colors): TokenSettings {
  return {
    name: 'Ruby classes in use',
    scope: ['support.class.ruby'],
    settings: {
      foreground: base.green
    }
  };
}

function constants({ base }: Colors): TokenSettings {
  return {
    name: 'Ruby constant definitions',
    scope: ['variable.other.constant.ruby'],
    settings: {
      foreground: base.cyan
    }
  };
}

function functions({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Ruby function definitions',
      scope: [
        'meta.function.method.with-arguments.ruby entity.name.function.ruby',
        'meta.function.method.without-arguments.ruby entity.name.function.ruby'
      ],
      settings: {
        foreground: base.green
      }
    },
    {
      name: 'Ruby block function parameters',
      scope: ['variable.other.block.ruby'],
      settings: {
        foreground: base.orange
      }
    },
    {
      name: 'Ruby function invocation',
      scope: [
        'meta.function-call.ruby entity.name.function.ruby',
        'support.function.kernel.ruby'
      ],
      settings: {
        foreground: base.cyan
      }
    }
  ];
}

function punctuation({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Ruby separators',
      scope: ['punctuation.separator.method.ruby'],
      settings: {
        foreground: base.pink
      }
    },
    {
      name: 'Ruby interpolation',
      scope: ['punctuation.section.embedded.end source.ruby'],
      settings: {
        foreground: base.pink
      }
    }
  ];
}

function symbols({ base }: Colors): TokenSettings {
  return {
    name: 'Ruby symbols',
    scope: [
      'constant.language.symbol.hashkey.ruby',
      'constant.language.symbol.ruby',
      'constant.other.symbol.hashkey.ruby',
      'constant.other.symbol.ruby',
      'punctuation.definition.constant.ruby',
      'punctuation.definition.constant.hashkey.ruby'
    ],
    settings: {
      foreground: base.purple
    }
  };
}
