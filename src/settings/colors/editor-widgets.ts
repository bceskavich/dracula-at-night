import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors
export default ({ base, misc }: Colors) => ({
  'editorWidget.background': base.bg,
  'editorWidget.border': misc.activeBorder,
  'editorWidget.resizeBorder': base.purple,
  'editorSuggestWidget.background': base.bg,
  'editorSuggestWidget.border': misc.activeBorder,
  'editorSuggestWidget.foreground': base.fg,
  'editorSuggestWidget.highlightForeground': null,
  'editorSuggestWidget.selectedBackground': misc.lineHighlight,
  'editorHoverWidget.background': base.bg,
  'editorHoverWidget.border': misc.activeBorder,
  'debugExceptionWidget.background': null,
  'debugExceptionWidget.border': null,
  'editorMarkerNavigation.background': misc.bgDark,
  'editorMarkerNavigationError.background': null,
  'editorMarkerNavigationWarning.background': null
});
