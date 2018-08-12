import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_title-bar-colors-macos
export default ({ base, misc }: Colors) => ({
  'titleBar.activeBackground': misc.container,
  'titleBar.activeForeground': base.fg,
  'titleBar.inactiveBackground': misc.container,
  'titleBar.inactiveForeground': misc.comment
});
