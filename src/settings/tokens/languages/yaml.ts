import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  punctuation(colors),
  keys(colors),
  aliases(colors)
];

function punctuation({ base }: Colors): TokenSettings {
  return {
    name: 'YAML separators',
    scope: [
      'punctuation.definition.block.scalar.folded.yaml',
      'punctuation.definition.block.scalar.literal.yaml',
      'punctuation.definition.block.sequence.item.yaml',
      'punctuation.separator.key-value.mapping.yaml',
      'support.other.chomping-indicator.yaml'
    ],
    settings: {
      foreground: base.pink
    }
  };
}

function keys({ base }: Colors): TokenSettings {
  return {
    name: 'YAML keys',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: base.cyan
    }
  };
}

function aliases({ base }: Colors): TokenSettings {
  return {
    name: 'YAML aliases',
    scope: ['variable.other.alias.yaml'],
    settings: {
      fontStyle: TokenFontStyle.underline,
      foreground: base.green
    }
  };
}
