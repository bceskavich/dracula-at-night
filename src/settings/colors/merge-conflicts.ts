import alpha from '../../lib/alpha';
import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts
export default ({ base }: Colors) => ({
  'merge.currentHeaderBackground': alpha(base.green, 90),
  'merge.currentContentBackground': null,
  'merge.incomingHeaderBackground': alpha(base.purple, 90),
  'merge.incomingContentBackground': null,
  'merge.border': null,
  'editorOverviewRuler.currentContentForeground': base.green,
  'editorOverviewRuler.incomingContentForeground': base.purple,
  'editorOverviewRuler.commonContentForeground': null
});
