const userModel = require('../models/user.model');





module.exports.createUser = async (
    {    fullName: { firstName, lastName }, email, password }
) => {
    if (!email || !password || !firstName ) {
        throw new Error('All fields are required');
    }

    const user = userModel.create({
        fullName: {
            firstName,
            lastName: lastName || ''
        },
        email,
        password
    });

    return user;
}
