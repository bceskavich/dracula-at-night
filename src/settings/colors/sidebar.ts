import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar
export default ({ base }: Colors) => ({
  'sideBar.background': base.bg,
  'sideBar.foreground': null,
  'sideBar.border': null,
  'sideBar.dropBackground': null,
  'sideBarTitle.foreground': base.fg,
  // TODO: explore color change
  'sideBarSectionHeader.background': null,
  'sideBarSectionHeader.foreground': null
});
