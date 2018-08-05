import { Colors } from '../../Theme';
import TokenSettings, { TokenFontStyle } from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  underlined(),
  bolded(colors),
  headings(colors),
  italics(colors),
  collections(colors),
  inlineCode(colors),
  ...links(colors),
  blockquotes(colors),
  hr(colors),
  codeBlocks(colors),
  constants(colors),
  ...braces(colors)
];

function underlined(): TokenSettings {
  return {
    name: 'Underlined markdown',
    scope: ['markup.underline'],
    settings: {
      fontStyle: TokenFontStyle.underline
    }
  };
}

function bolded({ base }: Colors): TokenSettings {
  return {
    name: 'Bolded markdown',
    scope: ['markup.bold'],
    settings: {
      fontStyle: TokenFontStyle.bold,
      foreground: base.orange
    }
  };
}

function headings({ base }: Colors): TokenSettings {
  return {
    name: 'Markdown headings',
    scope: ['markup.heading'],
    settings: {
      fontStyle: TokenFontStyle.bold,
      foreground: base.purple
    }
  };
}

function italics({ base }: Colors): TokenSettings {
  return {
    name: 'Markdown italics',
    scope: ['markup.italic'],
    settings: {
      fontStyle: TokenFontStyle.italic,
      foreground: base.yellow
    }
  };
}

function collections({ base }: Colors): TokenSettings {
  return {
    name: 'Collections (bullets + lists)',
    scope: [
      'beginning.punctuation.definition.list.markdown',
      'beginning.punctuation.definition.quote.markdown',
      'punctuation.definition.link.restructuredtext'
    ],
    settings: {
      foreground: base.cyan
    }
  };
}

function inlineCode({ base }: Colors): TokenSettings {
  return {
    name: 'Inline code',
    scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
    settings: {
      foreground: base.green
    }
  };
}

function links({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Links',
      scope: ['markup.underline.link', 'markup.underline.link.image'],
      settings: {
        foreground: base.cyan
      }
    },
    {
      name: 'Link text, image alt text',
      scope: [
        'meta.link.reference.def.restructuredtext',
        'punctuation.definition.directive.restructuredtext',
        'string.other.link.description',
        'string.other.link.title'
      ],
      settings: {
        foreground: base.pink
      }
    }
  ];
}

function blockquotes({ base }: Colors): TokenSettings {
  return {
    name: 'Blockquotes',
    scope: ['entity.name.directive.restructuredtext', 'markup.quote'],
    settings: {
      fontStyle: TokenFontStyle.italic,
      foreground: base.yellow
    }
  };
}

function hr({ misc }: Colors): TokenSettings {
  return {
    name: 'Horizontal rule',
    scope: ['meta.separator.markdown'],
    settings: {
      foreground: misc.comment
    }
  };
}

function codeBlocks({ base }: Colors): TokenSettings {
  return {
    name: 'Code blocks',
    scope: [
      'fenced_code.block.language',
      'markup.raw.inner.restructuredtext',
      'markup.fenced_code.block.markdown punctuation.definition.markdown'
    ],
    settings: {
      foreground: base.green
    }
  };
}

function constants({ base }: Colors): TokenSettings {
  return {
    name: 'Markdown constants',
    scope: ['punctuation.definition.constant.restructuredtext'],
    settings: {
      foreground: base.purple
    }
  };
}

function braces({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Braces in markdown headings',
      scope: [
        'markup.heading.markdown punctuation.definition.string.begin',
        'markup.heading.markdown punctuation.definition.string.end'
      ],
      settings: {
        foreground: base.purple
      }
    },
    {
      name: 'Braces in markdown paragraphs',
      scope: [
        'meta.paragraph.markdown punctuation.definition.string.begin',
        'meta.paragraph.markdown punctuation.definition.string.end'
      ],
      settings: {
        foreground: base.fg
      }
    },
    {
      name: 'Braces in markdown blockquotes',
      scope: [
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
        'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end'
      ],
      settings: {
        foreground: base.yellow
      }
    }
  ];
}
