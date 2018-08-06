import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  storage(colors),
  ...types(colors),
  modifiers(colors)
];

function storage({ base }: Colors): TokenSettings {
  return {
    name: 'Storage',
    scope: ['storage'],
    settings: {
      foreground: base.pink
    }
  };
}

function types({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Types',
      scope: ['entity.name.type'],
      settings: {
        foreground: base.cyan
      }
    },
    {
      name: 'Generics, templates, and mapped type declarations',
      scope: [
        'entity.name.type.type-parameter',
        'meta.indexer.mappedtype.declaration entity.name.type',
        'meta.type.parameters entity.name.type'
      ],
      settings: {
        foreground: base.orange
      }
    }
  ];
}

function modifiers({ base }: Colors): TokenSettings {
  return {
    name: 'Modifiers',
    scope: ['storage.modifier'],
    settings: {
      foreground: base.pink
    }
  };
}
