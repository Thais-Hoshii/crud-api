const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    res.status(200).json(users);
  },
  
  async store(req, res) {
    const { name, cpf, telephone, email } = await User.create(req.body);

    res.status(200).json({ name, cpf, telephone, email });
  },
  
  async update(req, res) {
    const { id, newName } = req.body;
    const user = await User.findOne({where: { id: id }});

    user.name = newName;
    await user.save()

    res.status(200).json(user);
  },
  
  async delete(req, res) {
    const { id } = req.body;
    const user = await User.findOne({where: { id: id }});

    user.destroy();

    res.status(200).json({ message: `Usuário foi removido com sucesso` })
  }
}