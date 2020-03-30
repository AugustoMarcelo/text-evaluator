const Text = require('../models/Text');

module.exports = {
  async update(request, response) {
    const { id } = request.params;

    const text = await Text.findByPk(id);

    if (!text) {
      return response.status(400).json({ error: 'Texto não encontrado' });
    }

    await (await text.increment({ ok: 1 })).update();

    return response.status(200).json(text);
  }
}