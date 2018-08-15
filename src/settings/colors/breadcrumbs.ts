import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_button-control
export default ({ base, misc }: Colors) => ({
  'breadcrumb.foreground': misc.comment,
  'breadcrumb.focusForeground': base.fg,
  'breadcrumb.activeSelectionForeground': base.fg,
  'breadcrumbPicker.background': base.bg
});
