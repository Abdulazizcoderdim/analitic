const Stream = require('../models/stream.model');

class StreamsController {
  async createStream(req, res) {
    try {
      const stream = await Stream.create(req.body);

      return res.status(201).json(stream);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async getStreams(req, res) {
    try {
      const streams = await Stream.find();
      return res.json(streams);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async getOne(req, res) {
    try {
      const stream = await Stream.findById(req.params.id);
      if (!stream) return res.status(404).json({ message: 'Поток не найден' });

      return res.json(stream);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async editStream(req, res) {
    try {
      const stream = await Stream.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!stream) return res.status(404).json({ message: 'Поток не найден' });

      return res.json(stream);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const stream = await Stream.findByIdAndDelete(req.params.id);

      if (!stream) return res.status(404).json({ message: 'Поток не найден' });

      return res.json({ message: 'Поток удален' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }
}

module.exports = new StreamsController();
