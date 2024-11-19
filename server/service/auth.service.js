const UserDto = require('../dtos/user.dto');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const tokenService = require('./token.service');

class AuhtService {
  async login(emailOrPhone, password) {
    const user = await User.findOne({ emailOrPhone });

    if (!user) {
      throw new Error('User not found');
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      throw new Error('Invalid password');
    }

    const userDto = new UserDto(user);

    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  async logout(refreshToken) {
    return await tokenService.removeToken(refreshToken);
  }

  async register(emailOrPhone, password) {
    if (!emailOrPhone || !password) {
      throw new Error('Email or phone or password is required');
    }

    const existUser = await User.findOne({ emailOrPhone });

    if (existUser) {
      throw new Error('User already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ emailOrPhone, password: hashPassword });

    const userDto = new UserDto(user);

    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }
}

module.exports = new AuhtService();
