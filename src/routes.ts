import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AutheticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';

import ensureAuthenticate from './middlewares/EnsureAuthenticate';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/message', 
  ensureAuthenticate,
  new CreateMessageController().handle,
);

router.get('/message/last3', new GetLast3MessagesController().handle);

router.get(
  '/profile',
  ensureAuthenticate,
  new ProfileUserController().handle
)

export { router };