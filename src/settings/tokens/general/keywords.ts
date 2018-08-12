import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Keywords',
    scope: ['keyword', 'punctuation.definition.keyword'],
    settings: {
      foreground: base.pink
    }
  },
  {
    name: 'Keyword "new"',
    scope: ['keyword.control.new', 'keyword.operator.new'],
    settings: {
      fontStyle: TokenFontStyle.bold
    }
  }
];
