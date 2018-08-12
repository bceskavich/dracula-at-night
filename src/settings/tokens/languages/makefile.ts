import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  keys(colors),
  prerequisiteNames(colors)
];

function punctuation({ base }: Colors): TokenSettings {
  return {
    name: 'Makefile interpolation punctuation',
    scope: ['punctuation.definition.variable.makefile'],
    settings: {
      foreground: base.pink
    }
  };
}

function keys({ base }: Colors): TokenSettings {
  return {
    name: 'Makefile keys',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: base.cyan
    }
  };
}

function prerequisiteNames({ base }: Colors): TokenSettings {
  return {
    name: 'Makefile prerequisite names',
    scope: ['meta.scope.prerequisites.makefile'],
    settings: {
      foreground: base.yellow
    }
  };
}
