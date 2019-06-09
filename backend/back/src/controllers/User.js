import UserModel from "../model/User";

const _ = require("lodash");

class User {
  static async createUser(userData) {
    return await new UserModel({ ...userData }).save();
  }

  static async getUsers() {
    let users = await UserModel.find().sort("name");
    return users.map(user => {
      user = _.pick(user, ["name", "surname", "phone", "devices", "registration_date"]);
    });
  }

  static async getUser(id) {
    let user = await UserModel.findById(id);
    user = _.pick(user, ["name", "surname", "phone", "devices", "registration_date"]);
    return user;
  }

  static async updateUser(id, userData) {
    return await UserModel.findByIdAndUpdate(
      id,
      { ...userData },
      { new: true }
    );
  }

  static async removeUser(id) {
    return await UserModel.findByIdAndRemove(id);
  }

  static findUserWithParam(email) {
    const user = UserModel.findOne({ email });
    if (!user) ctx.throw(402, "User not found");
    return user;
  }
}

module.exports = User;
