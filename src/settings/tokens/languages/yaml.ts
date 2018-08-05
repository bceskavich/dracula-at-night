import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
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
  }
];
