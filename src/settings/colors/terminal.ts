import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_integrated-terminal-colors
export default ({ base, ansi }: Colors) => ({
  'terminal.background': base.bg,
  'terminal.foreground': base.fg,
  'terminal.ansiBrightBlack': ansi.color8,
  'terminal.ansiBrightRed': ansi.color9,
  'terminal.ansiBrightGreen': ansi.color10,
  'terminal.ansiBrightYellow': ansi.color11,
  'terminal.ansiBrightBlue': ansi.color12,
  'terminal.ansiBrightMagenta': ansi.color13,
  'terminal.ansiBrightCyan': ansi.color14,
  'terminal.ansiBrightWhite': ansi.color15,
  'terminal.ansiBlack': ansi.color0,
  'terminal.ansiRed': ansi.color1,
  'terminal.ansiGreen': ansi.color2,
  'terminal.ansiYellow': ansi.color3,
  'terminal.ansiBlue': ansi.color4,
  'terminal.ansiMagenta': ansi.color5,
  'terminal.ansiCyan': ansi.color6,
  'terminal.ansiWhite': ansi.color8,
  'terminalCursor.background': base.bg,
  'terminalCursor.foreground': ansi.color2
});
