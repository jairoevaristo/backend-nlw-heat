import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;


    const profileUserService = new ProfileUserService();
    const profile = await profileUserService.execute(user_id);

    res.json(profile);
  }
}

export { ProfileUserController };