import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  separators(colors),
  bounds(colors),
  interpolation(colors)
];

function separators({ base }: Colors): TokenSettings {
  return {
    name: 'Separators',
    scope: [
      'entity.other.attribute-name.placeholder punctuation',
      'entity.other.attribute-name.pseudo-class punctuation',
      'entity.other.attribute-name.pseudo-element punctuation',
      'meta.object-binding-pattern-variable punctuation.destructuring',
      'punctuation.definition.entity.other.inherited-class',
      'punctuation.separator.dictionary.key-value',
      'punctuation.separator.hash',
      'punctuation.separator.inheritance',
      'punctuation.separator.key-value',
      'punctuation.separator.namespace',
      'punctuation.separator.pointer-access',
      'punctuation.separator.slice',
      'string.unquoted.heredoc punctuation.definition.string',
      'punctuation.separator.annotation',
      'punctuation.accessor'
    ],
    settings: {
      foreground: base.pink
    }
  };
}

function bounds({ base }: Colors): TokenSettings {
  return {
    name: 'Bounds (brackets, braces, parens, etc.)',
    scope: [
      'meta.brace.round',
      'meta.function-call punctuation',
      'punctuation.definition.arguments.begin',
      'punctuation.definition.arguments.end',
      'punctuation.definition.entity.begin',
      'punctuation.definition.entity.end',
      'punctuation.definition.type.begin',
      'punctuation.definition.type.end',
      'punctuation.section.scope.begin',
      'punctuation.section.scope.end',
      'string.template meta.brace'
    ],
    settings: {
      foreground: base.fg
    }
  };
}

function interpolation({ base }: Colors): TokenSettings {
  return {
    name: 'Variable interpolation operators',
    scope: [
      'meta.string-contents.quoted.double punctuation.definition.variable',
      'punctuation.definition.interpolation.begin',
      'punctuation.definition.interpolation.end',
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end',
      'punctuation.section.embedded.begin',
      'punctuation.section.embedded.end'
    ],
    settings: {
      foreground: base.pink
    }
  };
}
