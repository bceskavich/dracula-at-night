import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'OCaml Types',
    scope: ['storage.type.ocaml'],
    settings: {
      foreground: base.cyan
    }
  }
];
