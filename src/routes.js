import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Phelipe William',
    email: 'phelipe.william@hotmail.com',
    password_hash: '3123213213',
  });

  return res.json(user);
});

export default routes;
