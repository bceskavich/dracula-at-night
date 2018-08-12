import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs
export default ({ base, misc }: Colors) => ({
  'editorGroup.border': base.purple,
  'editorGroup.dropBackground': misc.tabDropBg,
  'editorGroupHeader.noTabsBackground': null,
  'editorGroupHeader.tabsBackground': misc.container,
  'editorGroupHeader.tabsBorder': misc.purpleDarker,
  'tab.activeBackground': misc.purpleDarker,
  'tab.activeForeground': base.fg,
  'tab.border': misc.container,
  'tab.activeBorder': null,
  'tab.unfocusedActiveBorder': null,
  'tab.inactiveBackground': misc.container,
  'tab.inactiveForeground': misc.activeBorder,
  'tab.unfocusedActiveForeground': null,
  'tab.unfocusedInactiveForeground': null,

  // TODO: explore color change
  'tab.hoverBackground': null,
  'tab.unfocusedHoverBackground': null,
  'tab.hoverBorder': null,
  'tab.unfocusedHoverBorder': null
});
