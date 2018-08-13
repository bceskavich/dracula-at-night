import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default ({ base }: Colors): TokenSettings[] => [
  {
    name: 'Objective-C Storage',
    scope: [
      'meta.implementation storage.type.objc',
      'meta.interface-or-protocol storage.type.objc'
    ],
    settings: {
      foreground: base.pink
    }
  },
  {
    name: 'Objective-C Types',
    scope: [
      'meta.protocol-list.objc',
      'meta.return-type.objc',
      'storage.type.objc'
    ],
    settings: {
      foreground: base.cyan
    }
  }
];
