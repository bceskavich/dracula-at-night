import TokenSettings from '../TokenSettings';
import typescript from './typescript';

export default (colors): TokenSettings[] => {
  return [...typescript(colors)];
};
