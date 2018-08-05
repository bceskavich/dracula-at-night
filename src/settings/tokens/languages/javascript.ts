import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  prototypeProperty(colors),
  specialLanguageClasses(colors),
  classesInUse(colors)
];

function prototypeProperty({ base }: Colors): TokenSettings {
  return {
    name: 'JavaScript prototype prop',
    scope: ['support.variable.property.js'],
    settings: { foreground: base.purple }
  };
}

function specialLanguageClasses({ base }: Colors): TokenSettings {
  return {
    name: 'JavaScript language classes',
    scope: [
      'support.class.console.js',
      'support.type.object.module.js',
      'support.class.promise.js'
    ],
    settings: {
      foreground: base.green
    }
  };
}

function classesInUse({ base }: Colors): TokenSettings {
  return {
    name: 'JavaScript classes in use',
    scope: ['support.class.js'],
    settings: {
      foreground: base.green
    }
  };
}
