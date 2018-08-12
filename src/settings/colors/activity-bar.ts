import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_activity-bar
export default ({ base, misc }: Colors) => ({
  'activityBar.background': misc.container,
  'activityBar.dropBackground': null,
  'activityBar.foreground': base.fg,
  'activityBar.border': misc.container,
  'activityBarBadge.background': base.pink,
  'activityBarBadge.foreground': base.fg
});
