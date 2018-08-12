import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_dropdown-control
export default ({ base, misc }: Colors) => ({
  'dropdown.background': misc.container,
  'dropdown.listBackground': misc.container,
  'dropdown.border': misc.activeBorder,
  'dropdown.foreground': base.fg
});
