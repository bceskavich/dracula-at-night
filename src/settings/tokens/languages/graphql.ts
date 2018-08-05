import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [separators(colors)];

function separators({ base }: Colors): TokenSettings {
  return {
    name: 'GraphQL separators',
    scope: ['punctuation.colon.graphql'],
    settings: {
      foreground: base.pink
    }
  };
}
