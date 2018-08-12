import general from './general';
import languages from './languages';
import TokenSettings from './TokenSettings';

export default (colors): TokenSettings[] => {
  return [...general(colors), ...languages(colors)];
};
