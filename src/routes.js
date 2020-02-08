import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddlewares);

routes.put('/users', (req, res) => {
  return res.json({ test: 'todo' });
});

export default routes;
