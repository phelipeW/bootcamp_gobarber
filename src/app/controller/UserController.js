import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const userExist = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExist) {
        return res.status(400).json({ error: 'User already exists.' });
      }
      const { id, name, email, provider } = await User.create(req.body);
      return res.json({
        id,
        name,
        email,
        provider,
      });
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao criar usuário' });
    }
  }
}

export default new UserController();
