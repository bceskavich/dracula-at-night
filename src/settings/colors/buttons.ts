import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_button-control
export default ({ base, misc }: Colors) => ({
  'button.background': misc.purpleDarker,
  'button.foreground': base.fg,
  'button.hoverBackground': null
});
