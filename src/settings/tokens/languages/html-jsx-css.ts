import { Colors } from '../../Theme';
import TokenSettings from '../TokenSettings';

export default (colors: Colors): TokenSettings[] => [
  htmlTags(colors),
  componentTags(colors),
  ...selectors(colors),
  attributeNames(colors)
];

function htmlTags({ base }: Colors): TokenSettings {
  return {
    name: 'HTML tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: base.pink
    }
  };
}

// TODO: red????
function componentTags({ base }: Colors): TokenSettings {
  return {
    name: 'Component tags',
    scope: ['entity.name.tag support.class.component.js'],
    settings: {
      foreground: base.purple
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
