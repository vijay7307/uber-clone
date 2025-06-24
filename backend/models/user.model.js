const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { use } = require('react');
 

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [2, 'First name must be at least 2 characters long'],
        },
        lastName: {
            type: String,
            minlength: [2, 'Last name must be at least 2 characters long'],
        },
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },

    password: {
        type: String,
        required: true,
        select: false,
    },

    socketId: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

userSchema.methods.comparePassword = async function (Password) {
    const isMatch = await bcrypt.compare(Password, this.password);
    return isMatch;
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('User', userSchema);   

module.exports = userModel;