import TokenSettings from '../TokenSettings';

import diff from './diff';
import groovy from './groovy';
import htmlCssJsx from './html-jsx-css';
import java from './java';
import javascript from './javascript';
import lua from './lua';
import markdown from './markdown';
import php from './php';
import ruby from './ruby';
import swift from './swift';
import typescript from './typescript';

export default (colors): TokenSettings[] => [
  ...diff(colors),
  ...groovy(colors),
  ...htmlCssJsx(colors),
  ...java(colors),
  ...javascript(colors),
  ...lua(colors),
  ...markdown(colors),
  ...php(colors),
  ...ruby(colors),
  ...swift(colors),
  ...typescript(colors)
];
