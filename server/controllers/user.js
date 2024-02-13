const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

module.exports = class UserController {
    static async register(req, res, next) {
        try {
            // console.log(req.body, "<<<< reqbody")
            let { username, email, password, role } = req.body
            let user = User.create({
                username, email, password, role: "Staff"
            })
            res.status(201).send(user)
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            if (!email || !password) {
                throw { name: "InvalidInput" }
            }
            const user = await User.findOne({
                where: { email }
            })
            if (!user || !comparePassword(password, user.password)) {
                console.log(user)
                throw { name: "InvalidUser" }
            }

            const token = signToken({
                id: user.id,
            })
            res.status(200).json({ access_token: token })
            console.log(req.body)

        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}