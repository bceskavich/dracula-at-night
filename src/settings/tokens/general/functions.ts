import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  definitions(colors),
  params(colors),
  invocation(colors),
  decorators(colors),
  magicFunctions(colors)
];

function definitions({ base }: Colors): TokenSettings {
  return {
    name: 'Function definitions',
    scope: ['meta.definition.function', 'meta.definition.method'],
    settings: {
      foreground: base.green
    }
  };
}

function params({ base }: Colors): TokenSettings {
  return {
    name: 'Function parameters',
    scope: [
      'entity.name.variable.parameter',
      'meta.at-rule.function variable',
      'meta.at-rule.mixin variable',
      'variable.parameter'
    ],
    settings: {
      foreground: base.orange
    }
  };
}

function invocation({ base }: Colors): TokenSettings {
  return {
    name: 'Function invocation',
    scope: [
      'meta.function-call.generic',
      'meta.function-call.object',
      'meta.function-call.static',
      'keyword.operator.function.infix'
    ],
    settings: {
      foreground: base.cyan
    }
  };
}

function decorators({ base }: Colors): TokenSettings {
  return {
    name: 'Decorators',
    scope: [
      'meta.decorator variable.other.readwrite',
      'meta.decorator variable.other.property',
      'meta.decorator variable.other.object'
    ],
    settings: {
      foreground: base.green
    }
  };
}

function magicFunctions({ base }: Colors): TokenSettings {
  return {
    name: 'Magic functions',
    scope: ['support.function.magic'],
    settings: {
      foreground: base.purple
    }
  };
}
