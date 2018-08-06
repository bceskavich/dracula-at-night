import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Strings',
    scope: ['string'],
    settings: {
      foreground: base.yellow
    }
  }
  // TODO: I don't think we need either of these things...
  /*
  {
    name: 'String quotes (temporary vscode fix)',
    scope: [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end'
    ],
    settings: {
      foreground: '#E9F284'
    }
  },
  {
    name: 'Property quotes (temporary vscode fix)',
    scope: [
      'punctuation.support.type.property-name.begin',
      'punctuation.support.type.property-name.end'
    ],
    settings: {
      foreground: '#8BE9FE'
    }
  }
  */
];
