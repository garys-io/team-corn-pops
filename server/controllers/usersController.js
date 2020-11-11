<<<<<<< HEAD
const bcrypt = require("bcrypt");

const connection = require("../dbConnection");
const userSchema = require("../models/user");

const User = connection.model("User", userSchema);

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

const create = async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({ email, password: hashedPassword });
    return user;
};

const findOneWithemail = async (email) => await User.findOne({ email });

const checkPassword = async ({ user, password }) =>
    await bcrypt.compare(password, user.password);

module.exports = { create, findOneWithemail, checkPassword };
=======
// CONTROLLER FOR USER MODEL

const db = require("../models/user");

// Defining methods for the usersController
module.exports = {
  // define methods here

};
>>>>>>> dev
