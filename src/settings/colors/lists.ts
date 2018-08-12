import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_lists-and-trees
export default ({ base, misc }: Colors) => ({
  'list.activeSelectionBackground': misc.container,
  'list.activeSelectionForeground': base.fg,
  'list.dropBackground': misc.selection,
  'list.focusBackground': misc.container,
  'list.highlightForeground': base.cyan,
  'list.hoverBackground': misc.container,
  'list.inactiveSelectionBackground': misc.container,
  'list.inactiveSelectionForeground': base.fg,
  'list.hoverForeground': base.fg,
  'list.focusForeground': base.fg
});
