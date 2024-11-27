const Postback = require('../models/postback.model');

class PostbacksController {
  async createPostback(req, res) {
    try {
      const postback = await Postback.create(req.body);

      return res.status(201).json(postback);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const postbacks = await Postback.find();

      return res.json(postbacks);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async editPostback(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const updatedPostback = await Postback.findByIdAndUpdate(
        id,
        updatedData,
        {
          new: true,
        }
      );

      if (!updatedPostback) {
        return res.status(404).json({ error: 'Postback topilmadi' });
      }

      return res.json(updatedPostback);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const postback = await Postback.findById(id);

      if (!postback) {
        return res.status(404).json({ error: 'Postback topilmadi' });
      }

      return res.json(postback);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }
}

module.exports = new PostbacksController();
