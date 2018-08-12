import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  functions(colors),
  punctuationBounds(colors),
  types(colors),
  resets(colors)
];

function functions({ base }: Colors): TokenSettings {
  return {
    name: 'Java function invocation',
    scope: ['meta.method-call.java meta.method'],
    settings: {
      foreground: base.green
    }
  };
}

function punctuationBounds({ base }: Colors): TokenSettings {
  return {
    name: 'Java punctuation bounds',
    scope: ['storage.type.generic.java'],
    settings: {
      foreground: base.fg
    }
  };
}

function types({ base }: Colors): TokenSettings {
  return {
    name: 'Java Types',
    scope: ['source.java storage.type'],
    settings: {
      foreground: base.cyan
    }
  };
}

function resets({ base }: Colors): TokenSettings {
  return {
    name: 'Java foreground resets',
    scope: ['keyword.operator.dereference.java', 'storage.modifier.import'],
    settings: {
      foreground: base.fg
    }
  };
}
