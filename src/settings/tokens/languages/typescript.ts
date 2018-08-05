import TokenSettings from '../TokenSettings';

export default (colors): TokenSettings[] => {
  return [aliasesAndInterfaces(colors)];
};

function aliasesAndInterfaces({ base }): TokenSettings {
  return {
    name: 'TS Type Aliases and Interfaces',
    scope: [
      'entity.name.type.ts',
      'entity.name.type.alias.ts',
      'entity.name.type.interface.ts'
    ],
    settings: {
      foreground: base.green
    }
  };
}
