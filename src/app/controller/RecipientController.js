import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    try {
      const recipient = await Recipient.create(req.body);
      return res.json(recipient);
    } catch (err) {
      return res.status(400).json({ error: 'Erro ao criar destinatario' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const recipientExists = await Recipient.findByPk(id);

      if (!recipientExists) {
        return res.status(401).json({ error: 'Destinatário não encontrado' });
      }

      const recipient = await recipientExists.update(req.body);

      return res.json(recipient);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Erro ao editar destinatario' });
    }
  }
}

export default new RecipientController();
