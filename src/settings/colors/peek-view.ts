import alpha from '../../lib/alpha';
import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors
export default ({ base, misc }: Colors) => ({
  'peekView.border': misc.activeBorder,
  'peekViewEditor.background': base.bg,
  'peekViewEditorGutter.background': null,
  'peekViewEditor.matchHighlightBackground': alpha(base.yellow, 80),
  'peekViewResult.background': base.bg,
  'peekViewResult.fileForeground': base.fg,
  'peekViewResult.lineForeground': base.fg,
  'peekViewResult.matchHighlightBackground': alpha(base.yellow, 80),
  'peekViewResult.selectionBackground': misc.lineHighlight,
  'peekViewResult.selectionForeground': base.fg,
  'peekViewTitle.background': misc.container,
  'peekViewTitleDescription.foreground': misc.comment,
  'peekViewTitleLabel.foreground': base.fg
});
