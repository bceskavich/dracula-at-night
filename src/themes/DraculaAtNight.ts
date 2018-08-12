import buildThemeSettings from '../settings/buildThemeSettings';
import { ANSIColors, BaseColors, MiscColors, Theme } from '../settings/Theme';

// Base colors
const base: BaseColors = {
  bg: '#0E1419',
  fg: '#F8F8F2',
  cyan: '#8BE9FD',
  green: '#50FA7B',
  orange: '#FFB86C',
  pink: '#FF79C6',
  purple: '#BD93F9',
  red: '#FF5555',
  yellow: '#F1FA8C',
  white: '#FFFFFF'
};

// ANSI colors
const ansi: ANSIColors = {
  color0: '#44475A',
  color1: '#DE312B',
  color2: '#2FD651',
  color3: '#D0D662',
  color4: '#9C6FCF',
  color5: '#DE559C',
  color6: '#6AC5D3',
  color7: '#D7D4C8',
  color8: '#656B84',
  color9: '#FF5555',
  color10: '#50FA7B',
  color11: '#F1FA8C',
  color12: '#BD93F9',
  color13: '#FF79C6',
  color14: '#8BE9FD',
  color15: '#F8F8F2'
};

const misc: MiscColors = {
  comment: '#6272A4',
  activeBorder: '#6272A4',
  lineHighlight: '#253340',
  container: '#253340',
  nonText: '#424450',
  tabDropBg: '#44475A70',
  bgLighter: '#424450',
  bgLight: '#343746',
  bgDark: '#21222C',
  bgDarker: '#191A21',
  purpleDarker: '#574473',
  selection: '#44475A'
};

const theme: Theme = {
  name: 'Dracula At Night',
  author: 'Billy Ceskavich',
  maintainers: ['Billy Ceskavich <bceskavich@gmail.com>'],
  semanticClass: 'theme.dracula',
  colorVars: { base, ansi, misc },

  ...buildThemeSettings(base, ansi, misc)
};

export default theme;
