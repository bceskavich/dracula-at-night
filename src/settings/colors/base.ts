import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors
export default ({ base, misc }: Colors) => ({
  focusBorder: misc.comment,
  foreground: base.fg,
  'widget.shadow': null,
  'selection.background': base.purple,
  descriptionForeground: null,
  errorForeground: base.red
});
