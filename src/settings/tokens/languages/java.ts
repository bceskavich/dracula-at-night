import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [functions(colors)];

function functions({ base }: Colors): TokenSettings {
  return {
    name: 'Java function invocation',
    scope: ['meta.method-call.java meta.method'],
    settings: {
      foreground: base.green
    }
  };
}
