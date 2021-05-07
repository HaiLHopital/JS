const { Comment } = require('../models/models');
const ApiError = require('../error/ApiError');

class commentController {
  async create(req, res, next) {
    try {
      const { text, userId, postId } = req.body;
      const comment = await Comment.create({ text, userId, postId });
      return res.json(comment);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    try {
      const {postId} = req.body;
      const comment = await Comment.findAll({where: {postId}})
      return res.json(comment)
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new commentController();
