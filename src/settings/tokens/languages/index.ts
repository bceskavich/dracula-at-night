import TokenSettings from '../TokenSettings';

import diff from './diff';
import javascript from './javascript';
import markdown from './markdown';
import php from './php';
import ruby from './ruby';
import swift from './swift';
import typescript from './typescript';

export default (colors): TokenSettings[] => [
  ...diff(colors),
  ...javascript(colors),
  ...markdown(colors),
  ...php(colors),
  ...ruby(colors),
  ...swift(colors),
  ...typescript(colors)
];
