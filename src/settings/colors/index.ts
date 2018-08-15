import { Colors } from '../Theme';

import activityBar from './activity-bar';
import badge from './badge';
import base from './base';
import breadcrumbs from './breadcrumbs';
import buttons from './buttons';
import contrast from './contrast';
import debug from './debug';
import diffEditor from './diff-editor';
import dropdowns from './dropdowns';
import editor from './editor';
import editorGroups from './editor-groups';
import editorWidgets from './editor-widgets';
import extensions from './extensions';
import git from './git';
import inputs from './inputs';
import lists from './lists';
import mergeConflicts from './merge-conflicts';
import notification from './notification';
import panels from './panels';
import peekView from './peek-view';
import progressBar from './progress-bar';
import quickPicker from './quick-picker';
import scrollbar from './scrollbar';
import sidebar from './sidebar';
import statusBar from './status-bar';
import terminal from './terminal';
import titleBar from './title-bar';
import welcome from './welcome';

export default (colors: Colors) => ({
  ...activityBar(colors),
  ...badge(colors),
  ...base(colors),
  ...breadcrumbs(colors),
  ...buttons(colors),
  ...contrast(colors),
  ...debug(colors),
  ...diffEditor(colors),
  ...dropdowns(colors),
  ...editor(colors),
  ...editorGroups(colors),
  ...editorWidgets(colors),
  ...extensions(colors),
  ...git(colors),
  ...inputs(colors),
  ...lists(colors),
  ...mergeConflicts(colors),
  ...notification(colors),
  ...panels(colors),
  ...peekView(colors),
  ...progressBar(colors),
  ...quickPicker(colors),
  ...scrollbar(),
  ...sidebar(colors),
  ...statusBar(colors),
  ...terminal(colors),
  ...titleBar(colors),
  ...welcome(colors)
});
