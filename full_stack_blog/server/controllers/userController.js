const bcrypt = require('bcrypt');
const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

//   probably need more validation and chcking for correct data but for now should be ok
//  and I probably should move logic into service files :/

function generateToken(id, login, role) {
  return jwt.sign({ id, login, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
}

class userController {
  async registration(req, res, next) {
    const { login, password, role } = req.body;
    if (!login || !password) {
      return next(ApiError.badRequest('wrong password or login'));
    }
    const candidate = await User.findOne({ where: { login } });
    if (candidate) {
      return next(ApiError.badRequest('login already taken'));
    }
    const hashPasword = await bcrypt.hash(password, 4);
    const user = await User.create({ login, password: hashPasword, role });
    const token = generateToken(user.id, user.login, user.role);
    return res.json(token);
  }

  async login(req, res, next) {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (!user) {
      return next(ApiError.badRequest('no user found'));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest('wrong password'));
    }
    const token = generateToken(user.id, user.login, user.role);
    return res.json(token);
  }

  async check(req, res, next) {
    res.json({msg:'wqwq'})
  }
}

module.exports = new userController();
