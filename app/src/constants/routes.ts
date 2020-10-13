export enum Routes {
  DASHBOARD = '/',
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  ACCOUNT = '/account',
  NETWORK_ERROR = '/network-error',
  RESET_PASSWORD = '/reset-password/:token',
  CHANGE_EMAIL_VERIFICATION = '/change-email/:token'
}

export const AccountRoutes = {
  GENERAL: `${Routes.ACCOUNT}/general`,
  MEMBERSHIP: `${Routes.ACCOUNT}/membership`
};
