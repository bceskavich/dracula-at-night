import { Colors } from '../../../themes/Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  instanceVariables(colors),
  classVariables(colors),
  classesInUse(colors)
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
