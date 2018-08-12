import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_contrast-colors
export default ({ misc }: Colors) => ({
  contrastBorder: misc.bgDarker,
  contrastActiveBorder: null
});
