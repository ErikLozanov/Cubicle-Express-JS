const jwt = require('../lib/jwt');

const bcrypt = require('bcrypt');

const User = require('../models/User');
const { SECRET } = require('../config/config');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    // TODO: Find user
    const user = await User.findOne({ username });
    if(!user) {
        throw new Error('Cannot find username or password')
    }
    // TODO: Validate password
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        throw new Error('Cannot find username or password');
    }
    // TODO: Create Token
    const payload = {
        _id: user._id,
        username: user.username,
    }
    const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'})
    // TODO: return user
    return token;
};