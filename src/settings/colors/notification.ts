import { Colors } from '../Theme';

// See: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_notification-colors
export default ({ base, misc }: Colors) => ({
  // >= v1.21 configs
  // TODO: validate new configs
  'notificationCenter.border': misc.activeBorder,
  'notificationCenterHeader.foreground': base.fg,
  'notificationCenterHeader.background': misc.container,
  'notificationToast.border': misc.activeBorder,
  'notifications.foreground': base.fg,
  'notifications.background': base.bg,
  'notifications.border': misc.activeBorder,
  'notificationLink.foreground': base.fg,

  // < v1.21 configs
  'notification.background': base.bg,
  'notification.foreground': base.fg,
  // TODO: validate color change
  'notification.buttonBackground': misc.container,
  'notification.buttonForeground': base.fg,
  // TODO: validate color change
  'notification.buttonHoverBackground': null,
  'notification.errorBackground': base.red,
  'notification.errorForeground': base.fg,
  'notification.infoBackground': base.cyan,
  'notification.infoForeground': base.bg,
  'notification.warningBackground': base.orange,
  'notification.warningForeground': base.bg
});
