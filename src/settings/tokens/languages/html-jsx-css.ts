import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  jsxTagPunctuation(colors),
  htmlTags(colors),
  componentTags(colors),
  ...selectors(colors),
  attributeNames(colors),
  resets(colors),
  ...css(colors)
];

function jsxTagPunctuation({ base }: Colors): TokenSettings {
  return {
    name: 'JSX Tag Punctuation',
    scope: [
      'punctuation.definition.tag.begin.js',
      'punctuation.definition.tag.end.js'
    ],
    settings: {
      foreground: base.pink
    }
  };
}

function htmlTags({ base }: Colors): TokenSettings {
  return {
    name: 'HTML tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: base.pink
    }
  };
}

function componentTags({ base }: Colors): TokenSettings {
  return {
    name: 'Component tags',
    scope: ['entity.name.tag support.class.component.js'],
    settings: {
      foreground: base.white
    }
  };
}

function selectors({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'Generic selectors',
      scope: ['meta.selector'],
      settings: {
        foreground: base.pink
      }
    },
    {
      name: 'Parent selectors (like `&`)',
      scope: ['entity.other.attribute-name.parent-selector'],
      settings: {
        foreground: base.pink
      }
    },
    {
      name: 'Attribute selector strings',
      scope: ['meta.attribute-selector.scss'],
      settings: {
        foreground: base.yellow
      }
    },
    {
      name: 'Attribute selector brackets',
      scope: [
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss'
      ],
      settings: {
        foreground: base.fg
      }
    }
  ];
}

function attributeNames({ base }: Colors): TokenSettings {
  return {
    name: 'HTML/CSS attribute names',
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: base.green
    }
  };
}

function resets({ base }: Colors): TokenSettings {
  return {
    name: 'JSX / TSX / CSS foreground resets',
    scope: [
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx',
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
      'punctuation.separator.list.comma.css'
    ],
    settings: {
      foreground: base.fg
    }
  };
}

function css({ base }: Colors): TokenSettings[] {
  return [
    {
      name: 'CSS Property Keys',
      scope: ['support.constant.property-value.css'],
      settings: {
        foreground: base.cyan
      }
    },
    {
      name: '@media rules',
      scope: [
        'keyword.control.at-rule.media.scss',
        'keyword.control.at-rule.media.scss punctuation.definition.keyword.scss'
      ],
      settings: {
        foreground: base.green
      }
    }
  ];
}
