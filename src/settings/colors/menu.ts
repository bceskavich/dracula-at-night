import { Colors } from '../Theme';

// See: https://code.visualstudio.com/api/references/theme-color#menu-bar-colors
export default ({ misc }: Colors) => ({
  'menubar.selectionForeground': null,
  'menubar.selectionBackground': null,
  'menubar.selectionBorder': null,
  'menu.foreGround': null,
  'menu.background': null,
  'menu.selectionForeground': null,
  'menu.selectionBackground': misc.menuHover,
  'menu.selectionBorder': null,
  'menu.separatorBackground': null
});
