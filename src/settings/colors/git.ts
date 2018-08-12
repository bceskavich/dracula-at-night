import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors
export default ({ base, misc }: Colors) => ({
  'gitDecoration.modifiedResourceForeground': base.orange,
  'gitDecoration.deletedResourceForeground': base.red,
  'gitDecoration.untrackedResourceForeground': base.green,
  'gitDecoration.ignoredResourceForeground': misc.comment,
  'gitDecoration.conflictingResourceForeground': base.orange
});
