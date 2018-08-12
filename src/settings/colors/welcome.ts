import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_welcome-page
export default ({ misc }: Colors) => ({
  'welcomePage.buttonBackground': null,
  'welcomePage.buttonHoverBackground': null,
  // TODO: validate color change
  'walkThrough.embeddedEditorBackground': misc.container
});
