import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_debug
export default ({ base, misc }: Colors) => ({
  'debugToolBar.background': base.bg,
  'debugToolBar.border': misc.activeBorder
});
