const UserDto = require('../dtos/user.dto');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const tokenService = require('./token.service');
const mailService = require('./mail.service');

class AuhtService {
  async login(emailOrPhone, password) {
    const user = await User.findOne({ emailOrPhone });

    if (!user) {
      throw new Error('User not found');
    }

    // const isPassword = await bcrypt.compare(password, user.password);

    // if (!isPassword) {
    //   throw new Error('Invalid password');
    // }

    const userDto = new UserDto(user);

    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  async logout(refreshToken) {
    return await tokenService.removeToken(refreshToken);
  }

  async register(emailOrPhone) {
    if (!emailOrPhone) {
      throw new Error('Email or phone is required');
    }

    const existUser = await User.findOne({ emailOrPhone });

    if (existUser) {
      return existUser;
    }

    const user = await User.create({ emailOrPhone });
    const userDto = new UserDto(user);

    // if (emailOrPhone && emailOrPhone.includes('@')) {
    //   await mailService.sendMail(
    //     emailOrPhone,
    //     `${process.env.API_URL}/api/auth/activation/${userDto.id}`
    //   );
    // }

    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  async activation(id) {
    const user = await User.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    if (!user.isActivated) {
      user.isActivated = true;
      await user.save();
    }

    return user;
  }

  
}

module.exports = new AuhtService();
