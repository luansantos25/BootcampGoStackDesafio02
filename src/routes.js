import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  await User.create({
    email: 'luan@test.com',
    password_hash: '123456',
  });
  res.json({ message: 'Hello World' });
});
export default routes;
