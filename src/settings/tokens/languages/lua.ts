import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [functions(colors)];

function functions({ base }: Colors): TokenSettings {
  return {
    name: 'Lua function definitions',
    scope: ['support.function.any-method.lua'],
    settings: {
      foreground: base.green
    }
  };
}
