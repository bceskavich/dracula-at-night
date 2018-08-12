import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors
export default ({ base, misc }: Colors) => ({
  'panel.background': base.bg,
  'panel.border': base.purple,
  'panelTitle.activeBorder': base.pink,
  'panelTitle.activeForeground': base.fg,
  'panelTitle.inactiveForeground': misc.comment
});
