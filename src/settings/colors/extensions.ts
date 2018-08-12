import alpha from '../../lib/alpha';
import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_extensions
export default ({ base }: Colors) => ({
  'extensionButton.prominentForeground': base.fg,
  'extensionButton.prominentBackground': alpha(base.green, 90),
  'extensionButton.prominentHoverBackground': alpha(base.green, 60)
});
