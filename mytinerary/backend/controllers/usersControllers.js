const nodemailer = require("nodemailer")
const crypto = require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const { response } = require("express")

async function sendEmail(email,uniqueText){

        const transporter=nodemailer.createTransport({ 

            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                user:"leandro.gomezdxn@gmail.com",
                pass:process.env.NODEMAILER
            }

        })

        const sender="leandro.gomezdxn@gmail.com"
        const mailOptions={
            from:sender,
            to:email,
            subjet:"verificacion de email de usuario",
            html:`presiona <a href="http://localhost:4000/api/verify/${uniqueText}"> aqui</a> para validar tu email`
        }
        await transporter.sendMail(mailOptions,function(error,response){
            if(error){
                console-log(error)
            }
            else{
                console.log("mensaje enviado")
            }
        })
}



const usersControllers = {
    
    verifyEmail:async (req,res) => {
        const{uniqueText}=req.params
        const user=await User.findOne({uniqueText:uniqueText})
        if(user){
            user.emailVerificado=true
            await user.save()
            res.redirect("http://localhost/3000/sign")
        }
        else{
            res.json({success:false,response:"su email no se ha podido verificar"})
        }
    },

    newUser: async (req, res) => {

        let { firstname, lastname, email, password } = req.body.newUser
        console.log(req.body)
        try {
            const userExists = await User.findOne({ email })

            if (userExists) {
                res.json({ success: "falseUE", response: "the user already exists, perform signIn" })
            }
            else {
               
                const uniqueText= crypto.randomBytes(15).toString("hex")
                const emailVerificado=false
                const passwordHash = bcryptjs.hashSync(password, 10)
                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText,
                    emailVerificado,
                })
                if(!emailVerificado){
                    await newUser.save()                  
                    await sendEmail(email,uniqueText)
                    res.json({ success: "trueUE", response: "hemos enviado un correo para verificar su email" })
                }
                                                      
            }
 
        }
        catch (error) { res.json({ success: "falseUE", response: null, error: error }) }
    }

}
module.exports = usersControllers