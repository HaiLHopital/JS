const { Comment, User } = require('../models/models');
const ApiError = require('../error/ApiError');

//   probably need more validation and chcking for correct data but for now should be ok
//  and I probably should move logic into service files :/

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
      const { id } = req.params;
      const comment = await Comment.findAll({
        where: { postId: id },
        include: { model: User, attributes: ['login'], order: [['createdAt', 'ASC']] },
      });
      return res.json(comment);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await Comment.destroy({ where: { id } });
      return res.json(comment);
    } catch (error) {
      next(ApiError.internal('permission denied'));
    }
  }
}

module.exports = new commentController();
