import { inject, singleton } from 'tsyringe';
import AuthController from './auth.controller';

@singleton()
class AuthRouter {
  constructor(@inject(AuthController) private authController: AuthController) {}

  getRoutes() {
    return [
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
        handler: [this.authController.checkRefreshToken, this.authController.refreshToken]
      }
    ];
  }
}

export default AuthRouter;
