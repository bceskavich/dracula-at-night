import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'RegExp string',
    scope: [
      'string.regexp',
      'constant.other.character-class.set.regexp',
      'constant.character.escape.backslash.regexp'
    ],
    settings: {
      foreground: base.yellow
    }
  },
  {
    name: 'RegExp non-capture operators',
    scope: ['punctuation.definition.group.capture.regexp'],
    settings: {
      foreground: base.pink
    }
  },
  {
    name: 'RegExp start and end characters',
    scope: [
      'string.regexp punctuation.definition.string.begin',
      'string.regexp punctuation.definition.string.end'
    ],
    settings: {
      foreground: base.red
    }
  },
  {
    name: 'Character group',
    scope: ['punctuation.definition.character-class.regexp'],
    settings: {
      foreground: base.cyan
    }
  },
  {
    name: 'Capture groups',
    scope: ['punctuation.definition.group.regexp'],
    settings: {
      foreground: base.orange
    }
  },
  {
    name: 'Assertion operators',
    scope: [
      'punctuation.definition.group.assertion.regexp',
      'keyword.operator.negation.regexp'
    ],
    settings: {
      foreground: base.red
    }
  },
  {
    name: 'Positive lookaheads',
    scope: ['meta.assertion.look-ahead.regexp'],
    settings: {
      foreground: base.green
    }
  }
];
