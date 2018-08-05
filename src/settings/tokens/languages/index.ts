import TokenSettings from '../TokenSettings';

import diff from './diff';
import markdown from './markdown';
import typescript from './typescript';

export default (colors): TokenSettings[] => [
  ...diff(colors),
  ...markdown(colors),
  ...typescript(colors)
];
