import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  variables(colors),
  resets(colors)
];

function variables({ base }: Colors): TokenSettings {
  return {
    name: 'Shell variables prefixed with "$"',
    scope: ['source.shell variable.other'],
    settings: {
      foreground: base.purple
    }
  };
}

function resets({ base }: Colors): TokenSettings {
  return {
    name: 'Shell foreground resets',
    scope: [
      'meta.scope.for-loop.shell punctuation.definition.string.begin',
      'meta.scope.for-loop.shell punctuation.definition.string.end',
      'meta.scope.for-loop.shell string'
    ],
    settings: {
      foreground: base.fg
    }
  };
}
