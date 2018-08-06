import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [functions(colors)];

function functions({ base }: Colors): TokenSettings {
  return {
    name: 'Groovy function definitions',
    scope: ['meta.method.groovy'],
    settings: {
      foreground: base.green
    }
  };
}
