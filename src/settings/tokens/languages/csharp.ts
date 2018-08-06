import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  types(colors)
];

function punctuation({ base }: Colors): TokenSettings {
  return {
    name: 'C# punctuation bounds',
    scope: ['punctuation.definition.tag.cs'],
    settings: {
      foreground: base.fg
    }
  };
}

function types({ base }: Colors): TokenSettings {
  return {
    name: 'C# Types',
    scope: ['keyword.type.cs', 'storage.type.cs'],
    settings: {
      foreground: base.cyan
    }
  };
}
