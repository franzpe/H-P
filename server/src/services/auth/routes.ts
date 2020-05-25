import authController from './authController';
import { checkRefreshToken } from './auth';

export default [
  {
    /**
     * @swagger
     * /search:
     *  get:
     *    description: use to send access and refresh_token
     *    responses:
     *      '200':
     *        description: A successful response
     */
    path: '/refresh_token',
    method: 'get',
    handler: [checkRefreshToken, authController.refreshToken]
  }
];
