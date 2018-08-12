import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_badge
export default ({ base, misc }: Colors) => ({
  'badge.foreground': base.fg,
  'badge.background': misc.container
});
