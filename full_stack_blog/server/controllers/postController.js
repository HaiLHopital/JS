const { Post, Comment } = require('../models/models');
const ApiError = require('../error/ApiError');

//   probably need more validation and chcking for correct data but for now should be ok
//  and I probably should move logic into service files :/
// and should be added paggination 

class postController {
  async create(req, res, next) {
    try {
      const { text, userId } = req.body;
      const post = await Post.create({ text, userId });
      return res.json(post);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    const posts = await Post.findAll();
    return res.json(posts.reverse());
  }
  async getAllFromUser(req, res) {
    const { id } = req.params;
    const posts = await Post.findAll({ where: { userId: id } });
    return res.json(posts);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id } });
    return res.json(post);
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await Comment.destroy({ where: { postId: id } });
      const post = await Post.destroy({ where: { id } });
      return res.json(post);
    } catch (error) {
      next(ApiError.internal('permission denied'));
    }
  }
}

module.exports = new postController();
