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

  async editUser(userId, name, telegram) {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error('User not found');
    }

    user.name = name || user.name || '';
    user.telegram = telegram || user.telegram || '';

    return await user.save();
  }

  async changePassword(userId, currentPassword, newPassword) {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error('User not found');
    }

    const isPassword = await bcrypt.compare(currentPassword, user.password);

    if (!isPassword) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    user.password = await bcrypt.hash(newPassword, 10);

    await user.save();
    return { message: 'Password updated successfully' };
  }
}

module.exports = new AuhtService();
