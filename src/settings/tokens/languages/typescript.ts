import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  prototypeProperty(colors),
  specialLanguageClasses(colors),
  classesInUse(colors)
];

function prototypeProperty({ base }: Colors): TokenSettings {
  return {
    name: 'TypeScript prototype prop',
    scope: ['support.variable.property.ts'],
    settings: { foreground: base.purple }
  };
}

function specialLanguageClasses({ base }: Colors): TokenSettings {
  return {
    name: 'TypeScript language classes',
    scope: [
      'support.class.console.ts',
      'support.type.object.module.ts',
      'support.class.promise.ts'
    ],
    settings: {
      foreground: base.green
    }
  };
}

function classesInUse({ base }: Colors): TokenSettings {
  return {
    name: 'TypeScript classes in use',
    scope: ['support.class.ts'],
    settings: {
      foreground: base.green
    }
  };
}

// function aliasesAndInterfaces({ base }): TokenSettings {
//   return {
//     name: 'TS Type Aliases and Interfaces',
//     scope: [
//       'entity.name.type.ts',
//       'entity.name.type.alias.ts',
//       'entity.name.type.interface.ts'
//     ],
//     settings: {
//       foreground: base.green
//     }
//   };
// }
