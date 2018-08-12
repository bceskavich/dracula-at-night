import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_input-control
export default ({ base, misc }: Colors) => ({
  'input.background': base.bg,
  'input.foreground': base.fg,
  'input.border': misc.container,
  'input.placeholderForeground': misc.comment,
  'inputOption.activeBorder': misc.activeBorder,
  'inputValidation.infoBackground': null,
  'inputValidation.infoBorder': base.pink,
  'inputValidation.warningBackground': null,
  'inputValidation.warningBorder': base.orange,
  'inputValidation.errorBackground': null,
  'inputValidation.errorBorder': base.red
});
