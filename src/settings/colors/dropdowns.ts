import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_dropdown-control
export default ({ base, misc }: Colors) => ({
  // TODO: validate color change
  'dropdown.background': misc.container,
  // TODO: validate color change
  'dropdown.listBackground': misc.container,
  // TODO: validate color change
  'dropdown.border': misc.activeBorder,
  'dropdown.foreground': base.fg
});
