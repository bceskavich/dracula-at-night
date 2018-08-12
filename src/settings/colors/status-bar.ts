import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors
export default ({ base, misc }: Colors) => ({
  'statusBar.background': base.bg,
  'statusBar.foreground': base.fg,
  'statusBar.border': misc.activeBorder,
  'statusBar.debuggingBackground': base.red,
  'statusBar.debuggingForeground': base.fg,
  'statusBar.debuggingBorder': misc.activeBorder,
  'statusBar.noFolderBackground': base.bg,
  'statusBar.noFolderForeground': base.fg,
  'statusBarItem.activeBackground': null,
  'statusBarItem.hoverBackground': null,
  'statusBarItem.prominentBackground': base.red,
  'statusBarItem.prominentHoverBackground': base.orange
});
