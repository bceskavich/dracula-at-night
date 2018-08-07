import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  separators(colors),
  keys(colors),
  types(colors),
  actions(colors),
  variables(colors)
];

function separators({ base }: Colors): TokenSettings {
  return {
    name: 'GraphQL separators',
    scope: ['punctuation.colon.graphql'],
    settings: {
      foreground: base.pink
    }
  };
}

function keys({ base }: Colors): TokenSettings {
  return {
    name: 'GraphQL keys',
    scope: ['variable.graphql', 'variable.arguments.graphql'],
    settings: {
      foreground: base.yellow
    }
  };
}

function types({ base }: Colors): TokenSettings {
  return {
    name: 'GraphQL types',
    scope: [
      'support.type.graphql',
      'support.type.builtin.graphql',
      'support.type.enum.graphql',
      'entity.scalar.graphql'
    ],
    settings: {
      foreground: base.cyan
    }
  };
}

function actions({ base }: Colors): TokenSettings {
  return {
    name: 'GraphQL actions (mutations, fragments, queries)',
    scope: ['entity.name.function.graphql'],
    settings: {
      foreground: base.green
    }
  };
}

function variables({ base }: Colors): TokenSettings {
  return {
    name: 'GraphQL variables',
    scope: [
      'meta.selectionset.graphql variable.graphql',
      'variable.parameter.graphql'
    ],
    settings: {
      foreground: base.orange
    }
  };
}
