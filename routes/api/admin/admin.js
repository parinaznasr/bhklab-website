const Admin= require('../../../database/models/admin');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

const login = async (req, res) => {
    const {username, password} = req.body

    try {
        const admin = await Admin.login(username, password)

        // create a token
        const token = createToken(admin._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const signup = async (req, res) => {
    const {username, password} = req.body

    try {
        const admin = await Admin.signup(username, password)

        // create a token
        const token = createToken(admin._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signup, login }
