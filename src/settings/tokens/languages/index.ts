import TokenSettings from '../TokenSettings';

import coffeescript from './coffeescript';
import csharp from './csharp';
import diff from './diff';
import graphql from './graphql';
import groovy from './groovy';
import htmlCssJsx from './html-jsx-css';
import java from './java';
import javascript from './javascript';
import lua from './lua';
import makefile from './makefile';
import markdown from './markdown';
import php from './php';
import powershell from './powershell';
import ruby from './ruby';
import swift from './swift';
import toml from './toml';
import typescript from './typescript';
import yaml from './yaml';

export default (colors): TokenSettings[] => [
  ...coffeescript(colors),
  ...csharp(colors),
  ...diff(colors),
  ...graphql(colors),
  ...groovy(colors),
  ...htmlCssJsx(colors),
  ...java(colors),
  ...javascript(colors),
  ...lua(colors),
  ...makefile(colors),
  ...markdown(colors),
  ...php(colors),
  ...powershell(colors),
  ...ruby(colors),
  ...swift(colors),
  ...toml(colors),
  ...typescript(colors),
  ...yaml(colors)
];
