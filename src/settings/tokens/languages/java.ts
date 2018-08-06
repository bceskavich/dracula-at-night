import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  functions(colors),
  punctuationBounds(colors),
  types(colors)
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
