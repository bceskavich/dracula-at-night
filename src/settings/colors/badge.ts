import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_badge
export default ({ base, misc }: Colors) => ({
  'badge.foreground': base.fg,
  // TODO: validate color change
  'badge.background': misc.container
});
