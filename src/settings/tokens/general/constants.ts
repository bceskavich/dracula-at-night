import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  constants(colors),
  userDefinedConstants(colors),
  constantEscapes(colors),
  timestamps(colors),
  builtinConstants(colors)
];

function constants({ base }: Colors): TokenSettings {
  return {
    name: 'Constants',
    scope: ['constant'],
    settings: {
      foreground: base.orange
    }
  };
}

function userDefinedConstants({ base }: Colors): TokenSettings {
  return {
    name: 'User-defined constants',
    scope: ['variable.other.constant'],
    settings: {
      foreground: base.purple
    }
  };
}

function constantEscapes({ base }: Colors): TokenSettings {
  return {
    name: 'Constant escape sequences',
    scope: [
      'constant.character.escape',
      'constant.character.string.escape',
      'constant.regexp'
    ],
    settings: {
      foreground: base.pink
    }
  };
}

function timestamps({ base }: Colors): TokenSettings {
  return {
    name: 'Dates and timestamps',
    scope: ['constant.other.date', 'constant.other.timestamp'],
    settings: {
      foreground: base.orange
    }
  };
}

function builtinConstants({ base }: Colors): TokenSettings {
  return {
    name: 'Built-in constants',
    scope: ['support.variable', 'variable.other.predefined'],
    settings: {
      foreground: base.purple
    }
  };
}
