module.exports = class UserDto {
  id;
  emailOrPhone;
  password;

  constructor(model) {
    this.id = model._id;
    this.emailOrPhone = model.emailOrPhone;
    this.password = model.password;
  }
};
