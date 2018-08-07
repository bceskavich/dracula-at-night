import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  types(colors),
  constants(colors)
];

function punctuation({ base }: Colors): TokenSettings {
  return {
    name: 'Powershell punctuation bounds',
    scope: [
      'keyword.operator.other.powershell',
      'keyword.other.statement-separator.powershell'
    ],
    settings: {
      foreground: base.fg
    }
  };
}

function types({ base }: Colors): TokenSettings {
  return {
    name: 'Powershell Types',
    scope: ['source.powershell entity.other.attribute-name'],
    settings: {
      foreground: base.cyan
    }
  };
}

function constants({ base }: Colors): TokenSettings {
  return {
    name: 'Powershell constants',
    scope: ['support.constant'],
    settings: {
      foreground: base.purple
    }
  };
}
