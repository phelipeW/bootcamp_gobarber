import { Router } from 'express';

import RecipientController from './app/controller/RecipientController';

import SessionController from './app/controller/SessionController';

import UserController from './app/controller/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/login', SessionController.store);

routes.post('/users', UserController.store);
routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

export default routes;
