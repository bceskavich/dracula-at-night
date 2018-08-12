import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_welcome-page
export default ({ misc }: Colors) => ({
  'welcomePage.buttonBackground': null,
  'welcomePage.buttonHoverBackground': misc.container,
  'walkThrough.embeddedEditorBackground': misc.container
});
