import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_button-control
export default ({ base, misc }: Colors) => ({
  // TODO: validate color change to container
  'button.background': misc.container,
  'button.foreground': base.fg,
  'button.hoverBackground': null
});
