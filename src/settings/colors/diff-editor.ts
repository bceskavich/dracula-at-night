import alpha from '../../lib/alpha';
import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_diff-editor-colors
export default ({ base }: Colors) => ({
  'diffEditor.insertedTextBackground': alpha(base.green, 20),
  'diffEditor.insertedTextBorder': null,
  'diffEditor.removedTextBackground': alpha(base.red, 50),
  'diffEditor.removedTextBorder': null
});
