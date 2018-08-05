import languages from './languages';
import TokenSettings from './TokenSettings';

export default (colors): TokenSettings[] => {
  return [...languages(colors)];
};
