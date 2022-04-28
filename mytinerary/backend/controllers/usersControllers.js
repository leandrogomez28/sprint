const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")




async function sendEmail(email, uniqueText) {

    const transporter = nodemailer.createTransport({

        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "leandro.mytinerary@gmail.com",
            pass: "mytinerary1234"
        }

    })

    const sender = "leandro.mytinerary@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subjet: "verificacion de email de usuario",
        html: `presiona <a href="http://localhost:4000/api/verify/${uniqueText}"> aqui </a> para validar tu email`
    }
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console - log(error)
        }
        else {
            console.log("mensaje enviado")
        }
    })
}



const usersControllers = {

    verifyEmail: async (req, res) => {
        const { uniqueText } = req.params
        const user = await User.findOne({ uniqueText: uniqueText })
        if (user) {
            user.emailVerificado = true
            await user.save()
            res.redirect("http://localhost:3000/sign")
        }
        else {
            res.json({ success: false, response: "su email no se ha podido verificar" })
        }
    },

    newUser: async (req, res) => {

        let { firstname, lastname, email, password, from } = req.body.newUser
        console.log(req.body)
        try {
            const userExists = await User.findOne({ email })


            if (userExists) {

                if (from !== "signup") {
                    const passwordHash = bcryptjs.hashSync(password, 10)
                    userExists.password = passwordHash;
                    userExists.emailVerificado = true
                    userExists.from = from
                    userExists.conected = false
                    userExists.save()
                    res.json({ success: true, response: "actualizamos tu signin para que lo puedas realizar con " + from })

                }

                else {
                    res.json({ success: false, response: "el nombre de usuario ya esta en uso" })
                }
            }
            else {

                const uniqueText = crypto.randomBytes(15).toString("hex")
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText,
                    emailVerificado,
                    conected: false,
                    from,

                })

                if (from !== "signup") {
                    newUser.emailVerificado = true,
                        newUser.from = true,
                        newUser.conected = false,
                        await newUser.save()
                    res.json({ success: true, data: { newUser }, response: "felicitaciones hemos creado tu usuario con " + from })
                }

                else {
                    newUser.emailVerificado = false
                    newUser.from = from
                    newUser.conected = false
                    await newUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({ success: "true", response: "hemos enviado un correo para verificar tu email" })
                }


            }
        }

        catch (error) { res.json({ success: "false", from: "signup", response: null, error: error }) }
    },

    accesoUsuario: async (req, res) => {
        const { email, password } = req.body.userData
        try {
            const usuario = await User.findOne({ email })

            if (!usuario) {
                res.json({ success: false, from: "controller", error: "el usuario y/o contraseña es incorrecto" })
            }
            else {
                if (usuario.emailVerificado) {
                    let passwordCoincide = bcryptjs.compareSync(password, usuario.password)
                    if (passwordCoincide) {

                        const datosUser = {
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                            id: usuario._id,

                        }
                        usuario.conected = true
                        await usuario.save()
                        const token = jwt.sign({ ...datosUser }, process.env.SECRETKEY, { expiresIn: 60*60*24 })
                        res.json({ success: true, from: "controller", response: { token, ...datosUser } })
                    }
                    else {
                        res.json({ success: false, from: "controller", error: "el usuario y/o contraseña es incorrecto" })
                    }

                }
                else { res.json({ success: false, from: "controller", error: "verifica tu email para validarlo" }) }
            }
        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }
    },

    cerrarSesion: async (req, res) => {
        const email = req.body.email
        console.log(req.body.email)
        const user = await User.findOne({ email })

        user.conected = false
        await user.save()
        res.json({ success: true, response: "sesion cerrada" })


    },

    verificarToken: async (req, res) => {
        if (!req.error) {
            res.json({
                success: true,
                 respuesta: {
                    firstname: req.user.firstname,
                    lastname: req.user.lastname,
                    email: req.user.email,
                    id: req.user.id
                },
                response:"bienvenido nuevamente "+ req.user.firstname
            })

        }
        else{
            res.json({success:false,response:"Por favor realiza nuevamente sign in"})
        }
    }

}
module.exports = usersControllers