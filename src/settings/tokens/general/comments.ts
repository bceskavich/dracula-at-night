import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  comments(colors),
  ...jsdoc(colors)
];

function comments({ misc }: Colors): TokenSettings {
  return {
    name: 'Comments',
    scope: [
      'comment',
      'punctuation.definition.comment',
      'unused.comment',
      'wildcard.comment'
    ],
    settings: {
      foreground: misc.comment
    }
  };
}

// TODO: some things are missing here, do audit
function jsdoc({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'JSDoc comment keywords/classes',
      scope: [
        'comment keyword.codetag.notation',
        'comment.block.documentation keyword',
        'comment.block.documentation storage.type.class'
      ],
      settings: {
        foreground: base.cyan
      }
    },
    {
      name: 'JSDoc-style comment parameters',
      scope: ['comment.block.documentation variable'],
      settings: {
        foreground: base.orange
      }
    }
  ];
}
