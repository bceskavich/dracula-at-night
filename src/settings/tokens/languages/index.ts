import TokenSettings from '../TokenSettings';

import c from './c';
import coffeescript from './coffeescript';
import csharp from './csharp';
import diff from './diff';
import elixir from './elixir';
import go from './go';
import graphql from './graphql';
import groovy from './groovy';
import haskell from './haskell';
import htmlCssJsx from './html-jsx-css';
import java from './java';
import javascript from './javascript';
import lua from './lua';
import makefile from './makefile';
import markdown from './markdown';
import objectiveC from './objective-c';
import ocaml from './ocaml';
import perl from './perl';
import php from './php';
import powershell from './powershell';
import python from './python';
import regexp from './regexp';
import ruby from './ruby';
import rust from './rust';
import shell from './shell';
import swift from './swift';
import toml from './toml';
import typescript from './typescript';
import yaml from './yaml';

export default (colors): TokenSettings[] => [
  ...c(colors),
  ...coffeescript(colors),
  ...csharp(colors),
  ...diff(colors),
  ...elixir(colors),
  ...go(colors),
  ...graphql(colors),
  ...groovy(colors),
  ...haskell(colors),
  ...htmlCssJsx(colors),
  ...java(colors),
  ...javascript(colors),
  ...lua(colors),
  ...makefile(colors),
  ...markdown(colors),
  ...objectiveC(colors),
  ...ocaml(colors),
  ...perl(colors),
  ...php(colors),
  ...powershell(colors),
  ...python(colors),
  ...regexp(colors),
  ...ruby(colors),
  ...rust(colors),
  ...shell(colors),
  ...swift(colors),
  ...toml(colors),
  ...typescript(colors),
  ...yaml(colors)
];
