const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")


const usersControllers = {

    newUser: async (req, res) => {

        let { firstname, lastname, email, password } = req.body.newUser
        console.log(req.body)
        try {
            const userExists = await User.findOne({ email })

            if (userExists) {
                res.json({ success: "falseUE", response: "the user already exists, perform signIn" })
            }
            else {
                const passwordHash = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash
                })
                await newUser.save()
                res.json({ success: "trueUE", response: "user created successfully" })
            }
        }
        catch (error) { res.json({ success: "falseUE", response: null, error: error }) }
    }

}
module.exports = usersControllers