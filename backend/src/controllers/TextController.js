const Text = require('../models/Text');

module.exports = {
  async index(request, response) {
    const { page = 1, limit = 5 } = request.query;
    const offset = (page - 1) * limit;
    const columnsPermitted = ['funny', 'nice', 'ok'];

    let order = [];

    if (request.query.order) {
      const orderColumn = request.query.order;

      if (orderColumn.startsWith('-')) {
        if (columnsPermitted.includes(orderColumn.substr(1))) {
          order = [orderColumn.substr(1)];
        }
      } else {
        if (columnsPermitted.includes(orderColumn)) {
          order = [[orderColumn, 'DESC']];
        }
      }
    }

    const texts = await Text.findAndCountAll({
      order,
      limit,
      offset,
    });

    return response.status(200).json(texts);
  },

  async store(request, response) {
    const { description } = request.body;

    const text = await Text.create({ description });

    return response.status(201).json(text);
  },

  async show(request, response) {
    const { id } = request.params;
    
    const text = await Text.findByPk(id);

    if (!text) {
      return response.status(400).json({ error: 'Texto não encontrado. Tente novamente' });
    }

    return response.status(200).json(text);
  }
}